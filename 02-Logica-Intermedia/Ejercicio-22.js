/*
Programa una función que elimine los valores duplicados de un array. Por ejemplo, miFuncion([1, 2, 3, 2, 4]) devolverá [1, 2, 3, 4].
*/

function eliminarDuplicados(array) {
  if (array === undefined) return "No ingresaste un arreglo de números"

  if (!(array instanceof Array))
    return "El valor que ingresaste no es un arreglo"

  return array.filter((value, index) => array.indexOf(value) === index);
}

module.exports = { eliminarDuplicados }

/*Explicación:
1. La función `eliminarDuplicados` toma un argumento `array` que se espera sea un array de números.
2. Se realizan validaciones similares a la función anterior:
    - Si `array` es `undefined`, se retorna un mensaje indicando que no se ingresó un arreglo de números.
    - Si `array` no es una instancia de `Array`, se retorna un mensaje indicando que el valor ingresado no es un arreglo.
3. Se utiliza el método `filter` para crear un nuevo array que solo incluye los valores únicos.
    - La función de callback del `filter` verifica si el índice del primer valor encontrado en el array es igual al índice actual. Si es así, significa que es la primera vez que se encuentra ese valor, por lo que se incluye en el nuevo array.
4. Finalmente, se retorna el nuevo array sin duplicados.    
*/ 