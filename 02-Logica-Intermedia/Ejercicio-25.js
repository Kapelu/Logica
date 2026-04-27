/*
Programar una función que invierta un array sin usar el método reverse(). Por ejemplo invertirArray([1,2,3]) devolverá [3,2,1]
*/
function invertirArray(arr) {
  const resultado = []

  for (let i = arr.length - 1; i >= 0; i--) {
    resultado.push(arr[i])
  }

  return resultado
}

module.exports = { invertirArray };

/*
Explicación:
1. La función `invertirArray` toma un array como argumento.
2. Se crea un nuevo array vacío llamado `resultado` para almacenar los elementos invertidos.
3. Se utiliza un bucle `for` que comienza desde el último índice del array y se decrementa hasta llegar al primer índice.
4. En cada iteración, se agrega el elemento actual al array `resultado` utilizando el método `push()`.
5. Finalmente, la función retorna el array `resultado`, que contiene los elementos del array original en orden inverso.
*/  