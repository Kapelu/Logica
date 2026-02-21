/*
Programa una función que convierta texto a mayúsculas y minúsculas. por ejemplo miFuncion("Hola Mundo") devolverá "HOLA MUNDO" y "hola mundo" respectivamente.
*/

const convertirMayusculasMinusculas = (texto = "") => {
    if (!texto) return console.warn("No ingresaste un texto");
    if (typeof texto !== "string") {
      throw Error(
        `El valor "${texto}" ingresado, No es una cadena de texto`,
      );
    }
    return `Texto original: ${texto}\nTexto mayúsculas: ${texto.toUpperCase()}\nTexto minúsculas: ${texto.toLowerCase()}`;
}

convertirMayusculasMinusculas("Hola Mundo");

/*
Explicación:
1. La función `convertirMayusculasMinusculas` recibe un parámetro `texto` que es el string que se desea convertir a mayúsculas y minúsculas.
2. Se verifica si el parámetro está vacío, y si es así, se muestra una advertencia en la consola.
3. Se verifica si el tipo de dato del parámetro no es una cadena de texto, y si es así, se lanza un error con un mensaje descriptivo.
4. Si el valor es válido, se devuelve una cadena que incluye el texto original, el texto convertido a mayúsculas y el texto convertido a minúsculas, cada uno en una línea separada.
*/  

module.exports = { convertirMayusculasMinusculas };
