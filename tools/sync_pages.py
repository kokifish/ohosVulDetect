#!/usr/bin/env python3
"""页面注册单源校验：DemoItem 清单（feat_api ApiRegistry / feat_vuln Index cat-）与
main_pages.json 双向一致，替代 AGENTS checklist 里 ②③ 两步的人工同步。

用法：
  python3 tools/sync_pages.py           # 校验模式：不一致即退出码 1（可作门禁）
  python3 tools/sync_pages.py --fix     # 修复模式：缺失注册自动补入 main_pages.json
非 DemoItem 页（壳/后门页）走 allowlist，出现新的非清单页需在此登记并说明。
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DEMO_ITEM = re.compile(r"new DemoItem\('[^']*',\s*'[^']*',\s*'([^']+)'\)")
# 不出现在 DemoItem 清单、但必须注册的页面（壳/深链入口，非遍历目标）
ALLOWLIST = {
    # pages/Index 是壳入口；EmbeddedProviderPage 由 EmbeddedUIExtensionAbility
    # 经 session.loadContent 装载（EmbeddedComponent 提供方，无 DemoItem）。
    "feat_api": ["pages/Index", "pages/EmbeddedProviderPage"],
    "feat_vuln": ["pages/Index", "pages/Backdoor"],
    # feat_heavy 无 DemoItem 体系：唯一页面 HeavyFarmPage 即注册单源（生成语料不进 sweep）。
    "feat_heavy": ["pages/HeavyFarmPage"],
}
SOURCES = {
    "feat_api": ("feat_api/src/main/ets/model/ApiRegistry.ets",
                 "feat_api/src/main/resources/base/profile/main_pages.json"),
    "feat_vuln": ("feat_vuln/src/main/ets/pages/Index.ets",
                  "feat_vuln/src/main/resources/base/profile/main_pages.json"),
    "feat_heavy": ("feat_heavy/src/main/ets/pages/HeavyFarmPage.ets",
                   "feat_heavy/src/main/resources/base/profile/main_pages.json"),
}


def check(module: str, fix: bool) -> list[str]:
    src_path, mp_path = (ROOT / p for p in SOURCES[module])
    demo_pages = DEMO_ITEM.findall(src_path.read_text(encoding="utf-8"))
    dup = {p for p in demo_pages if demo_pages.count(p) > 1}
    pages_json = json.loads(mp_path.read_text(encoding="utf-8"))
    registered = pages_json["src"]
    allowed = ALLOWLIST[module]
    errors = [f"{module}: DemoItem 重复注册 {sorted(dup)}"] if dup else []

    missing = [p for p in demo_pages if p not in registered]
    extra = [p for p in registered if p not in demo_pages and p not in allowed]
    undeclared = [p for p in allowed if p not in registered]

    if missing:
        if fix:
            registered.extend(missing)
            pages_json["src"] = registered
            mp_path.write_text(json.dumps(pages_json, ensure_ascii=False, indent=2) + "\n",
                               encoding="utf-8")
            print(f"{module}: 已补注册 {missing}")
        else:
            errors.append(f"{module}: DemoItem 未注册到 main_pages {missing}")
    if extra:
        errors.append(f"{module}: main_pages 存在未登记页面（无 DemoItem 且不在 allowlist）{extra}")
    if undeclared:
        errors.append(f"{module}: allowlist 页面未注册 {undeclared}")
    # 落盘（fix 分支可能已改）
    if fix and (missing or not errors):
        pass
    return errors


def main() -> int:
    fix = "--fix" in sys.argv
    errors = []
    for module in SOURCES:
        errors += check(module, fix)
    if errors:
        print("FAIL:")
        for e in errors:
            print(f"  - {e}")
        return 1
    print("OK: 页面注册与 DemoItem 清单双向一致")
    return 0


if __name__ == "__main__":
    sys.exit(main())
