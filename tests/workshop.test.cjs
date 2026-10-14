const { readFileSync } = require("node:fs");
const assert = require("node:assert/strict");
const { test } = require("node:test");
const ts = require("typescript");
const source = ts.transpileModule(readFileSync("lib/workshop.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const code = { exports: {} };
new Function("module", "exports", source)(code, code.exports);
const { cleanList, compareLists } = code.exports;
test("trims whitespace, removes blanks and duplicates, preserving first appearance", () =>
  assert.deepEqual(cleanList(" Apple \r\n\r\nPear\rApple\n Orange "), [
    "Apple",
    "Pear",
    "Orange",
  ]));
test("case matching is explicitly optional", () => {
  assert.deepEqual(cleanList("Apple\napple"), ["Apple", "apple"]);
  assert.deepEqual(cleanList("Apple\napple", true), ["Apple"]);
});
test("compares shared and unmatched entries without changing order", () =>
  assert.deepEqual(compareLists(["Apple", "Pear"], ["Pear", "Banana"]), {
    shared: ["Pear"],
    onlyA: ["Apple"],
    onlyB: ["Banana"],
  }));
test("case-insensitive comparison preserves input spelling", () =>
  assert.deepEqual(compareLists(["Apple", "Pear"], ["apple", "Banana"], true), {
    shared: ["Apple"],
    onlyA: ["Pear"],
    onlyB: ["Banana"],
  }));
test("empty lists are valid", () => {
  assert.deepEqual(cleanList(" \n\t"), []);
  assert.deepEqual(compareLists([], ["Pear"]), {
    shared: [],
    onlyA: [],
    onlyB: ["Pear"],
  });
});
