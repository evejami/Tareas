//testing
const calulator = require("./calulator");
test("adds 1+2 to equal 3", () => {
  expect(calulator.sum(1, 2)).toBe(3);
});
const resta = require("./calulator.js");
test("adds 5-5 to equal 0", () => {
  expect(calulator.resta(5, 5)).toBe(0);
});
