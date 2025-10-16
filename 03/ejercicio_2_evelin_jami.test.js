const { SuperArray } = require("./ejercicio_2_evelin_jami");

function testCase(array, rows, cols, expected) {
  const array1 = new SuperArray(array);
  return array1.snail(rows, cols);
}

test("La matriz debe tener 1x1", () => {
  expect(testCase([5], 1, 1)).toEqual([[5]]);
});

test("La matriz tiene 3 filas", () => {
  const resultado = testCase([1, 2, 3, 4, 5, 6], 3, 2);
  expect(resultado.length).toBe(3);
});

test("Debe realizar la matriz 3x3", () => {
  expect(testCase([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3)).toEqual([
    [1, 6, 7],
    [2, 5, 8],
    [3, 4, 9],
  ]);
});

test("Debe realizar una matriz 3x4", () => {
  expect(testCase([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3, 4)).toEqual([
    [1, 6, 7, 12],
    [2, 5, 8, 11],
    [3, 4, 9, 10],
  ]);
});

test("Debe realizar una matriz 4x3", () => {
  expect(testCase([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4, 3)).toEqual([
    [1, 8, 9],
    [2, 7, 10],
    [3, 6, 11],
    [4, 5, 12],
  ]);
});

test("Debe realizar una matriz con fila única 1x4", () => {
  expect(testCase([1, 2, 3, 4], 1, 4)).toEqual([[1, 2, 3, 4]]);
});

test("Debe realizar una matriz con columna única 4x1", () => {
  expect(testCase([1, 2, 3, 4], 4, 1)).toEqual([[1], [2], [3], [4]]);
});

test("Tamaño incorrecto debe retornar vacio []", () => {
  expect(testCase([1, 2, 3], 2, 2)).toEqual([]);
});

test("Tamaño incorrecto debe retornar vacio []", () => {
  const sa = new SuperArray([1, 2, 3]);
  const result = sa.snail(2, 2);
  expect(result.length).toBe(0);
});

test("Array vacío", () => {
  expect(testCase([], 1, 1)).toEqual([]);
});

test("Filas en cero (no válido)", () => {
  expect(testCase([1, 2, 3, 4], 0, 4)).toEqual([]);
});
test("Caso original del usuario (5x4)", () => {
  const nums = [
    19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
  ];
  const sa = new SuperArray(nums);
  expect(sa.snail(5, 4)).toEqual([
    [19, 17, 16, 15],
    [10, 1, 14, 4],
    [3, 2, 12, 20],
    [7, 5, 18, 11],
    [9, 8, 6, 13],
  ]);
});
