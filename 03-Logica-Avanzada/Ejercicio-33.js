/*
Programa una función que simule el metodo map(), ejemplo: miFuncion([1, 2, 3], x => x * 2) devolverá [2, 4, 6]. 
*/

const metodoMap = (array, callback) => {
  if (!Array.isArray(array)) {
    return 'Error: el primer argumento debe ser un array.'
  }
  if (typeof callback !== 'function') {
    return 'Error: el segundo argumento debe ser una función.'
  }

  const resultado = []

  for (let i = 0; i < array.length; i++) {
    resultado.push(callback(array[i], i, array))
  }

  return resultado
}

module.exports = { metodoMap }  

/* 
Explicación:
1. La función `metodoMap` toma dos argumentos: un array y una función de callback.
2. Se verifica si el primer argumento es un array y si el segundo argumento es una función. Si no, se devuelve un mensaje de error.
3. Se crea un nuevo array `resultado` para almacenar los resultados de la aplicación de la función de callback a cada elemento del array original.
4. Se itera sobre cada elemento del array original utilizando un bucle `for`, aplicando la función de callback a cada elemento y almacenando el resultado en el array `resultado`.
5. Finalmente, se devuelve el array `resultado` con los elementos transformados según la función de callback proporcionada. 
*/  