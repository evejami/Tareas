function createMultiples(size, multiple) {
  const array = [];
  for (let i = 1; i <= size; i++) {
    array.push(i * multiple);
  }
  return array;
}
console.log(createMultiples(2, 4));
console.log(createMultiples(5, 3));
