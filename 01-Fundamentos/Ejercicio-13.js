/*
Programa una función que cuente las consonantes en un string. por ejemplo miFuncion("Hola Mundo") devolverá 7.
*/
const contarConsonantes = (cadena = "") => {
  if (!cadena) return 0;

  let consonantes = cadena.match(/[^aeiou\s\d\W]/gi);

  return consonantes ? consonantes.length : 0;
};

/*
Explicación:
1. La función `contarConsonantes` recibe un parámetro `cadena` que es el string en el que se contarán las consonantes.
2. Se verifica si el parámetro está vacío, y si es así, se devuelve 0.

3. Se utiliza el método `match` con una expresión regular para encontrar todas las consonantes en la cadena. La expresión regular busca cualquier carácter que no sea una vocal, espacio, dígito o carácter no alfanumérico.
4. Si se encuentran consonantes, se muestra la cantidad encontrada; de lo contrario, se indica que no se encontraron consonantes. 
*/

module.exports = { contarConsonantes };