//testing
const { createMultiples } = require("./ejercicio_0_evelin_jami");

test("debería dar los múltiplos del número dado", () => {
  expect(createMultiples(5, 3)).toEqual([3, 6, 9, 12, 15]);
});

test("debería funcionar con números negativos", () => {
  expect(createMultiples(4, -2)).toEqual([-2, -4, -6, -8]);
});

test("debería funcionar con decimales", () => {
  expect(createMultiples(3, 2.5)).toEqual([2.5, 5, 7.5]);
});
