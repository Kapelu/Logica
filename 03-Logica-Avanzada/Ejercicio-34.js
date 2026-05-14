/*
Programa una función que simule el metodo filter(), ejemplo: miFuncion([1, 2, 3], x => x % 2 === 0) devolverá [2].
*/

const metodoFilter = (array, callback) => {
  if (!Array.isArray(array)) {
    return 'Error: el primer argumento debe ser un array.'
  }
  if (typeof callback !== 'function') {
    return 'Error: el segundo argumento debe ser una función.'
  }

  const resultado = []

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      resultado.push(array[i])
    }
  }

  return resultado
}

module.exports = { metodoFilter }

/* 
Explicación:
1. La función `metodoFilter` toma dos argumentos: un array y una función de callback.
2. Se verifica si el primer argumento es un array y si el segundo argumento es una función. Si no, se devuelve un mensaje de error.
3. Se crea un nuevo array `resultado` para almacenar los elementos que cumplen la condición definida por la función de callback.
4. Se itera sobre cada elemento del array original utilizando un bucle `for`, aplicando la función de callback a cada elemento. Si la función de callback devuelve `true`, el elemento se agrega al array `resultado`.
5. Finalmente, se devuelve el array `resultado` con los elementos que cumplen la condición definida por la función de callback proporcionada. 
*/  