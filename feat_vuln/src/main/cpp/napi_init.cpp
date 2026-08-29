#include "napi/native_api.h"
#include <cstring>
#include <cstdio>

// VULN: OVD-NATIVE-001 加密密钥硬编码于 .so（逆向 libentry.so 可直接提取）
static const char *g_secret_key = "w4d4f4k2ovd-native-key";

// VULN: OVD-NATIVE-002 无边界检查的 strcpy（缓冲区溢出模式）
static char g_out_buf[256];

static napi_value Add(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2] = {nullptr};
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    double a = 0;
    double b = 0;
    napi_get_value_double(env, args[0], &a);
    napi_get_value_double(env, args[1], &b);

    napi_value sum;
    napi_create_double(env, a + b, &sum);
    return sum;
}

// OVD-NATIVE-001：与硬编码密钥异或，返回可打印摘要长度
static napi_value XorNative(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1] = {nullptr};
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    size_t len = 0;
    napi_get_value_string_utf8(env, args[0], nullptr, 0, &len);
    char *input = new char[len + 1];
    size_t read = 0;
    napi_get_value_string_utf8(env, args[0], input, len + 1, &read);

    const size_t keyLen = strlen(g_secret_key);
    int nonZero = 0;
    for (size_t i = 0; i < read; i++) {
        char c = static_cast<char>(input[i] ^ g_secret_key[i % keyLen]);
        if (c != 0) {
            nonZero++;
        }
    }
    delete[] input;

    char out[64];
    snprintf(out, sizeof(out), "xor-with-so-key nonZero=%d", nonZero);
    napi_value result;
    napi_create_string_utf8(env, out, NAPI_AUTO_LENGTH, &result);
    return result;
}

// OVD-NATIVE-002：strcpy 无长度检查（demo 输入 64B < buf 256B，模式危险但不崩溃）
static napi_value VulnCopy(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1] = {nullptr};
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    size_t len = 0;
    napi_get_value_string_utf8(env, args[0], nullptr, 0, &len);
    char *input = new char[len + 1];
    size_t read = 0;
    napi_get_value_string_utf8(env, args[0], input, len + 1, &read);

    strcpy(g_out_buf, input); // VULN: 无边界检查
    size_t copied = strlen(g_out_buf);
    delete[] input;

    char out[64];
    snprintf(out, sizeof(out), "copied %zu bytes via strcpy", copied);
    napi_value result;
    napi_create_string_utf8(env, out, NAPI_AUTO_LENGTH, &result);
    return result;
}

EXTERN_C_START
static napi_value Init(napi_env env, napi_value exports)
{
    napi_property_descriptor desc[] = {
        {"add", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"xorNative", nullptr, XorNative, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"vulnCopy", nullptr, VulnCopy, nullptr, nullptr, nullptr, napi_default, nullptr},
    };
    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
    return exports;
}
EXTERN_C_END

static napi_module demoModule = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = Init,
    .nm_modname = "entry",
    .nm_priv = ((void *)0),
    .reserved = {0},
};

extern "C" __attribute__((constructor)) void RegisterEntryModule(void)
{
    napi_module_register(&demoModule);
}
