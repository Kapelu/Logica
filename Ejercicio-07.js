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
    console.info(`Texto original: ${texto}`);
    console.info(`Texto mayúsculas: ${texto.toUpperCase()}`);
    console.info(`Texto minúsculas: ${texto.toLowerCase()}`);
}

convertirMayusculasMinusculas("Hola Mundo");

module.exports = { convertirMayusculasMinusculas };
