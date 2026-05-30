/*
Programa una función que determine si dos strings son anagramas, ejemplo miFuncion("roma","amor") Devuelve true
*/
const sonAnagramas = (str1, str2) => {
  if (!str1 || !str2) return false
  if (str1.length === 0) return false
  if (str2.length === 0) return false

  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[\W_]+/g, '')
      .split('')
      .sort()
      .join('')

  return normalize(str1) === normalize(str2)
}

module.exports = { sonAnagramas };

/*
Explicación:
1. La función `sonAnagramas` toma dos argumentos, `str1` y `str2`, que se espera sean cadenas de texto.
2. Se realizan varias validaciones:
    - Si alguno de los strings no es proporcionado, se muestra una advertencia indicando que no se ingresaron ambos strings.
    - Si el primer string está vacío, se muestra una advertencia indicando que el primer string está vacío.
    - Si el segundo string está vacío, se muestra una advertencia indicando que el segundo string está vacío.
3. Se define una función `normalize` que toma un string y lo normaliza de la siguiente manera:
    - Convierte el string a minúsculas.
    - Elimina todos los caracteres no alfanuméricos utilizando una expresión regular.
    - Divide el string en un arreglo de caracteres, lo ordena alfabéticamente y luego lo une nuevamente en un string.
4. Finalmente, se compara la versión normalizada de ambos strings. Si son iguales, significa que son anagramas y se devuelve `true`; de lo contrario, se devuelve `false`.
*/