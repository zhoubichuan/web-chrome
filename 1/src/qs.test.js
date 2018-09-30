let qs = require("./qs");

function assert(val, message) {
  if (!val) {
    throw new error(message);
  }
}

const assert = require("assert");
assert(qs.parse("name=zfpx").name == "zfpx", "姓名必须是zfpx");
assert(qs.parse("name=zfpx&age=9").age == 9, "年龄必须是9");

assert(qs.stringify({ name: "zfpx" }) == "name=zfpx", "一个字段不同");
assert(
  qs.stringify({ name: "zfpx", age: 9 }) == "name=zfpx&age=9",
  "两个字段不同"
);

// console.log(qs.parse("name=zfpx").name == "zfpx");
// console.log(qs.parse("name=zfpx&age=9").age == 9);

// console.log(qs.stringify({ name: "zfpx" }) == "name=zfpx");
// console.log(qs.stringify({ name: "zfpx", age: 9 }) == "name=zfpx&age=9");
