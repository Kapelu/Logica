/*
Programa una función que simule el metodo reduce(). Ejemplo: miFuncion([1, 2, 3], (acumulador, valor) => acumulador + valor, 0) devolverá 6.
*/

function metodoReduce(array, callback, valorInicial) {
  let acumulador
  let inicio

  if (valorInicial !== undefined) {
    acumulador = valorInicial
    inicio = 0
  } else {
    acumulador = array[0]
    inicio = 1
  }

  for (let i = inicio; i < array.length; i++) {
    acumulador = callback(acumulador, array[i], i, array)
  }

  return acumulador
}

module.exports = { metodoReduce };

/*
Explicación:
1. La función `metodoReduce` recibe un array, una función callback y opcionalmente un valor inicial.
2. Verifica que el primer argumento sea un array y el segundo una función.
3. Si el array está vacío y no se proporciona valor inicial, devuelve un error.
4. Si se proporciona valor inicial, lo usa como acumulador; de lo contrario usa el primer elemento del array.
5. Recorre el array desde el índice correspondiente, aplicando el callback y actualizando el acumulador.
6. Devuelve el valor acumulado.
*/
