/*
Programa una función que compare 2 arrays y devuelva los elementos diferentes entre sí, ejemplo: miFuncion([1,2,3], [1,4]) devolverá [2,3,4].
*/

const elementosDiferentes = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return 'Error: ambos argumentos deben ser arrays.'
  }

  const diferentes = []

  array1.forEach((elemento) => {
    if (!array2.includes(elemento) && !diferentes.includes(elemento)) {
      diferentes.push(elemento)
    }
  })

  array2.forEach((elemento) => {
    if (!array1.includes(elemento) && !diferentes.includes(elemento)) {
      diferentes.push(elemento)
    }
  })

  return diferentes
}

module.exports = {elementosDiferentes}