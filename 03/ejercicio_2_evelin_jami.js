class SuperArray {
  constructor(array) {
    this.array = array;
  }

  snail(rowsCount, colsCount) {
    if (this.array.length !== rowsCount * colsCount) {
      console.log("Dimensiones no válidas para la matriz");
      return [];
    }

    let matriz = [];
    let contador = 0;
    for (let i = 0; i < rowsCount; i++) {
      matriz[i] = [];
    }

    for (let columna = 0; columna < colsCount; columna++) {
      if (columna % 2 === 0) {
        for (let fila = 0; fila < rowsCount; fila++) {
          matriz[fila][columna] = this.array[contador++];
        }
      } else {
        for (let fila = rowsCount - 1; fila >= 0; fila--) {
          matriz[fila][columna] = this.array[contador++];
        }
      }
    }
    for (let fila of matriz) {
      console.log(fila.join("\t"));
    }
    return matriz;
  }
}
module.exports = { SuperArray };
