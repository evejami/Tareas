const { isLeapYear } = require("./ejercicio_1_evelin_jami");

test("Debe funcionar con una entrada tipo number y string)", () => {
  expect(isLeapYear(2024)).toEqual(true);
  expect(isLeapYear("2024")).toEqual(true);
});

test("Divisible por 4 pero no por 100", () => {
  expect(isLeapYear(1988)).toEqual(true);
  expect(isLeapYear(2024)).toEqual(true);
  expect(isLeapYear(4028)).toEqual(true);
  expect(isLeapYear(8124)).toEqual(true);
});

test("Divisible por 100 pero no por 400", () => {
  expect(isLeapYear(2100)).toEqual(false);
  expect(isLeapYear(2500)).toEqual(false);
  expect(isLeapYear(5000)).toEqual(false);
  expect(isLeapYear(9100)).toEqual(false);
});

test("Divisible por 400 y 100", () => {
  expect(isLeapYear(2000)).toEqual(true);
  expect(isLeapYear(3200)).toEqual(true);
  expect(isLeapYear(4000)).toEqual(true);
  expect(isLeapYear(8000)).toEqual(true);
});

test("Divisible por 4 y por 100, pero no por 400", () => {
  expect(isLeapYear(1900)).toEqual(false);
  expect(isLeapYear(2100)).toEqual(false);
  expect(isLeapYear(5000)).toEqual(false);
});

test("Divisible por 4, 100 y 400", () => {
  expect(isLeapYear(2000)).toEqual(true);
  expect(isLeapYear(8000)).toEqual(true);
});

test("Los años: 1900, 2025, 2500, 2400 no son bisiestos", () => {
  expect(isLeapYear(1900)).toEqual(false);
  expect(isLeapYear(2025)).toEqual(false);
  expect(isLeapYear(2500)).toEqual(false);
  expect(isLeapYear(5030)).toEqual(false);
});

test("Los años: 2000, 2400, 5040, 99960 son años bisiestos", () => {
  expect(isLeapYear(2000)).toEqual(true);
  expect(isLeapYear(2400)).toEqual(true);
  expect(isLeapYear(5040)).toEqual(true);
  expect(isLeapYear(99960)).toEqual(true);
});
