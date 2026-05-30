/*
Programa una funciónpara encontrar el segundo numero más grande en un arreglo de números, pe. miFuncion([1, 2, 3, 4]) devolverá 3.
*/

const segundoMasGrande = (arr) => {
  if (!Array.isArray(arr)) return console.warn('El valor ingresado no es un arreglo')
  if (arr.length < 2) return console.warn('El arreglo debe tener al menos dos elementos')
  for (let num of arr) {
    if (typeof num !== 'number') return console.warn(`El valor ${num} no es un número`)
  }
  let max = -Infinity
  let secondMax = -Infinity
  for (let num of arr) {
    if (num > max) {
      secondMax = max
      max = num
    } else if (num > secondMax && num < max) {
      secondMax = num
    }
  }
  return secondMax === -Infinity ? console.warn('No hay un segundo número más grande') : secondMax
}

module.exports = { segundoMasGrande }   

/*
Explicación:
1. La función `segundoMasGrande` toma un arreglo como argumento.
2. Verifica si el argumento es un arreglo y si tiene al menos dos elementos. Si no, muestra una advertencia.
3. Recorre el arreglo para asegurarse de que todos los elementos sean números. Si encuentra un elemento que no es un número, muestra una advertencia.
4. Inicializa dos variables, `max` y `secondMax`, con el valor de `-Infinity` para asegurarse de que cualquier número en el arreglo sea mayor.
5. Recorre el arreglo nuevamente para encontrar el número más grande (`max`) y el segundo número más grande (`secondMax`).
6. Si `secondMax` sigue siendo `-Infinity`, significa que no hay un segundo número más grande, por lo que se muestra una advertencia. De lo contrario, se devuelve `secondMax`.
*/    