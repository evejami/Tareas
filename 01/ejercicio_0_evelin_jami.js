function createMultiples(size, multiplo) {
  const array = [];
  for (let i = 1; i <= size; i++) {
    array.push(i * multiplo);
  }
  return array;
}
console.log(createMultiples(2, 4));
console.log(createMultiples(5, 3));
module.exports = { createMultiples };
