/*
Programa una función que permita rotar un array n posiciones a la derecha. Por ejemplo, rotar([1, 2, 3, 4, 5], 2) devolverá [4, 5, 1, 2, 3].
*/

const rotar = (arr, n) => {
  if (!Array.isArray(arr)) return console.warn('El valor ingresado no es un arreglo')
  if (typeof n !== 'number') return console.warn('El valor ingresado no es un número')
  if (arr.length === 0) return console.warn('El arreglo está vacío')
  n = n % arr.length // Para manejar rotaciones mayores al tamaño del arreglo
  return [...arr.slice(-n), ...arr.slice(0, -n)]
}

module.exports = { rotar }

/*
Explicación:
1. La función `rotar` toma un arreglo y un número como argumentos.
2. Verifica si el primer argumento es un arreglo y si el segundo argumento es un número. Si no, muestra una advertencia.
3. Si el arreglo está vacío, muestra una advertencia.
4. Calcula el valor de `n` módulo la longitud del arreglo para manejar casos donde `n` es mayor que la longitud del arreglo.
5. Utiliza el método `slice` para dividir el arreglo en dos partes: la última `n` posiciones y el resto del arreglo. Luego, combina estas dos partes usando el operador de propagación (`...`) para formar el nuevo arreglo rotado.
6. Devuelve el nuevo arreglo rotado.
*/  