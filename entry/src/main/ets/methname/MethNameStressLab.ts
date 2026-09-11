// 本文件由 tools/gen_methname_stress.py 生成，勿手改。
// 方法名注入语料：对象字面量字符串键方法/存取器——键内容成为 abc 方法名本体
// （.function any #*#<键>(...)），对下游 .function 行解析构成注入面。命中模式与
// 归因见 tools/gen_methname_stress.py 文档字符串与 docs/BENCHMARK.md 红队节。
// 运行时无风险：全部为合法 TS 对象字面量语义。
// nl_method: R1 换行键方法：.function 行断行无括号 → 整 chunk 方法丢失
export const mn0_nl_method = { "n\nl"(): number { return 0; } };
// nl_getter: R1 换行键 getter（CR+LF）
export const mn1_get = { get "g\r\ng"(): number { return 1; } };
// paren_method: R2 括号键：名字截断 + 参数错位
export const mn2_paren_method = { "a(b"(): number { return 2; } };
// paren_only: R2 纯括号键：方法名坍缩为 #*#
export const mn3_paren_only = { "("(): number { return 3; } };
// static_tok: R3 空格+<tok>+{：method_type 劫持
export const mn4_static_tok = { "x <static> {"(): number { return 4; } };
// fake_sig: R3 完整伪造签名键
export const mn5_fake_sig = { "f(any a0) <static> {"(): number { return 5; } };
// lang_line: R3 伪造 .language 行片段
export const mn6_lang_line = { ".language ECMAScript"(): number { return 6; } };
// quote_method: R4 引号键：literal 方法三元组丢失
export const mn7_quote_method = { "m\"q"(): number { return 7; } };
// comma_getset: R4 逗号键 getter/setter
export const mn8_getset = { get "s, v"(): number { return 8; }, set "s, v"(v: number) { } };
// dbl_quote: R4 双引号键
export const mn9_dbl_quote = { "\"\""(): number { return 9; } };
// mangle_pre: 键=改写前缀形态：#*##*#x 前缀叠加
export const mn10_mangle_pre = { "#*#x"(): number { return 10; } };
// label_key: 键=label 形态
export const mn11_label_key = { "jump_label_0:"(): number { return 11; } };
// esslot_key: 键=方法边界标记形态
export const mn12_esslot_key = { "L_ESSlotNumberAnnotation:"(): number { return 12; } };
// offset_key: 键=池条目形态
export const mn13_offset_key = { "[offset:0x9, name_value:zz]"(): number { return 13; } };
// cjk_key: 非 ASCII 键（结构应存活，污染下游命名）
export const mn14_cjk_key = { "方法\"名"(): number { return 14; } };
// field_nl: 换行键普通字段（literal 面）
export const mn15_field: Record<string, number> = { "f\nf": 15 };

// 运行时校验和：遍历全部对象计数键位（防 tree-shake；值正确性由 sweep/冒烟核对）。
export function methNameStressChecksum(): string {
  let cnt = 0;
  cnt += Object.keys(mn0_nl_method).length;
  cnt += Object.keys(mn1_get).length;
  cnt += Object.keys(mn2_paren_method).length;
  cnt += Object.keys(mn3_paren_only).length;
  cnt += Object.keys(mn4_static_tok).length;
  cnt += Object.keys(mn5_fake_sig).length;
  cnt += Object.keys(mn6_lang_line).length;
  cnt += Object.keys(mn7_quote_method).length;
  cnt += Object.keys(mn8_getset).length;
  cnt += Object.keys(mn9_dbl_quote).length;
  cnt += Object.keys(mn10_mangle_pre).length;
  cnt += Object.keys(mn11_label_key).length;
  cnt += Object.keys(mn12_esslot_key).length;
  cnt += Object.keys(mn13_offset_key).length;
  cnt += Object.keys(mn14_cjk_key).length;
  cnt += Object.keys(mn15_field).length;
  return `methname keys=${cnt}`;
}
