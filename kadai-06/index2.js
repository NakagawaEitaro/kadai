try {
    const str1 = "abc"
    JSON.parse(str1)
} catch (error) {
    //正しいJSONではないのでパースできない。
    //文字列だけのJOSNは、ダブルクォーテーションで囲む必要がある。
}

try {
const str2 = "'abc'"
JSON.parse(str2)
} catch (error) {
//JOSNでの文字列はシングルクォートではなく、ダブルクォーテーションで囲む必要がある。
}

const str3 = '"abc"'
JSON.parse(str3)

try {
const str4 = '{"a": undefined}'
JSON.parse(str4)
} catch (error) {
//JOSNでの文字列はシングルクォートではなく、ダブルクォーテーションで囲む必要がある。
//undefinedは値として使えない。
}

const str5 = '{"a": 123}'
JSON.parse(str5)

try {
const str6 = '{ a: 123 }'
JSON.parse(str6)
} catch (error) {
//正しいJSONではないのでパースできない。
//JOSNのキーは、ダブルクォーテーションで囲む必要がある。
}

try {
    const str7 = '{"func":() => console.log("Hi"!)}'
    JSON.parse(str7)
} catch (error) {
    //（）はプロパティの値として使えない。もしくは文字列はダブルクォーテーションで囲む必要がある。
}
