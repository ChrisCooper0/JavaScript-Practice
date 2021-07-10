const disemvowel = require("./katas");

test("removes vowels from string", () => {
  expect(disemvowel("Test")).toBe("Tst");
  expect(disemvowel("TestAEIOUaeiouString")).toBe("TstStrng");
});

// Test for the opposite
test("removes vowels from string", () => {
  expect(disemvowel("Test")).not.toBe("Test");
});
