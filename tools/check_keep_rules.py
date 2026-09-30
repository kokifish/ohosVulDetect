#!/usr/bin/env python3
"""keep 规则新鲜度门禁：obfuscation-rules.txt 的 keep 名必须仍存在于源码，
未识别的混淆选项视为拼写错误直接 FAIL（防 keep 静默失效/选项拼错被忽略）。

口径：
  - 选项集 = 本地 arkguard 1.1.3 实测支持面（含 -keep-property-name/-keep-global-name
    的单复数两种拼写：复数形态经 DIMP 半混淆族 .dis 实证有效）。
  - keep 名在全部 git 跟踪源码（ets/ts/js/cpp/h/c）里做词边界匹配；含 * 或 ? 的名
    按通配符对源码标识符全集做 fnmatch。
  - 只读仓库工作区，秒级；进 verify 快门禁与 CI。

用法：
  python3 tools/check_keep_rules.py            # 全部门禁
退出码：任一 stale keep / 未知选项 / 孤儿名单行 → 1。
"""
import fnmatch
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

# 本地 arkguard 1.1.3（ets-loader node_modules）实测支持面；_NAMES 后缀 = 需要跟名单
KNOWN_OPTIONS = {
    "-disable-obfuscation", "-compact", "-remove-log", "-remove-comments",
    "-remove-nosideeffects-calls",
    "-enable-property-obfuscation", "-enable-string-property-obfuscation",
    "-enable-toplevel-obfuscation", "-enable-export-obfuscation",
    "-enable-filename-obfuscation", "-enable-lib-obfuscation-options",
    "-enable-bytecode-obfuscation", "-enable-bytecode-obfuscation-debugging",
    "-enable-bytecode-obfuscation-arkui", "-enable-bytecode-obfuscation-enhanced",
    "-print-namecache", "-apply-namecache", "-print-kept-names",
    "-keep-property-name", "-keep-property-names",
    "-keep-global-name", "-keep-global-names",
    "-keep-file-name", "-keep-dts", "-keep",
    "-keep-comments", "-keep-object-props", "-keep-parameter-names", "-keep-uncompact",
}
KEEP_NAME_OPTIONS = {"-keep-property-name", "-keep-property-names",
                     "-keep-global-name", "-keep-global-names"}
SRC_EXTS = {".ets", ".ts", ".js", ".cpp", ".h", ".c"}


def tracked_sources() -> list[pathlib.Path]:
    files = subprocess.run(["git", "ls-files"], cwd=ROOT, capture_output=True,
                           text=True).stdout.split()
    return [ROOT / f for f in files if pathlib.Path(f).suffix in SRC_EXTS]


def parse_rules_file(path: pathlib.Path) -> dict:
    """解析单个 rules 文件 → {options, keep: {option: [names]}, orphan_lines}。
    名单行 = 紧跟 keep 选项行、不以 -/# 开头的非空行（空格分隔多名）。"""
    options: list[str] = []
    keep: dict[str, list[str]] = {}
    orphans: list[str] = []
    cur_keep: str | None = None
    for raw in path.read_text(encoding="utf-8").split("\n"):
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        if line.startswith("-"):
            opt = line.split()[0]
            if opt not in KNOWN_OPTIONS:
                orphans.append(f"未知选项: {opt}")
                cur_keep = None
                continue
            options.append(opt)
            cur_keep = opt if opt in KEEP_NAME_OPTIONS else None
            inline = line.split(None, 1)[1].strip() if len(line.split(None, 1)) > 1 else ""
            if cur_keep and inline:
                keep.setdefault(cur_keep, []).extend(inline.split())
            elif inline and not cur_keep:
                pass  # -print/-apply-namecache 的路径参数，非名单
            continue
        if cur_keep:
            keep.setdefault(cur_keep, []).extend(line.split())
        else:
            orphans.append(f"名单行不在任何 keep 选项下: {line[:60]}")
    return {"options": options, "keep": keep, "orphans": orphans}


def main() -> int:
    rules_files = sorted(ROOT.glob("*/obfuscation-rules.txt"))
    if not rules_files:
        print("ERROR: 未找到任何 obfuscation-rules.txt")
        return 1
    src_files = tracked_sources()
    blobs: list[tuple[str, str]] = []
    idents: set[str] = set()
    for f in src_files:
        try:
            txt = f.read_text(errors="ignore")
        except OSError:
            continue
        blobs.append((str(f.relative_to(ROOT)), txt))
        idents.update(re.findall(r"[A-Za-z_$][A-Za-z0-9_$]*", txt))

    problems: list[str] = []
    print(f"== keep 规则新鲜度：{len(rules_files)} 个 rules 文件 × {len(blobs)} 个源文件")
    for rf in rules_files:
        parsed = parse_rules_file(rf)
        problems += [f"{rf.relative_to(ROOT)}: {o}" for o in parsed["orphans"]]
        names = [(opt, n) for opt, ns in parsed["keep"].items() for n in ns]
        stale = []
        for opt, n in names:
            if any(c in n for c in "*?"):
                if not any(fnmatch.fnmatchcase(i, n) for i in idents):
                    stale.append(n)
            elif not re.search(r"\b" + re.escape(n) + r"\b", "\n".join(t for _, t in blobs)):
                stale.append(n)
        print(f"  {rf.relative_to(ROOT)}: options={len(parsed['options'])} "
              f"keep={len(names)} stale={len(stale)}")
        problems += [f"{rf.relative_to(ROOT)}: stale keep 名（源码已不存在）: {n}"
                     for n in stale]
    if problems:
        print("FAIL:")
        for p in problems:
            print(f"  {p}")
        return 1
    print("OK: 全部 keep 名存活、选项全部可识别")
    return 0


if __name__ == "__main__":
    sys.exit(main())
