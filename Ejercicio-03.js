/*
Programa una función que te devuelva el texto recortado según el número de caracteres indicados.
Por ejemplo: miFunción("Hola Mundo", 4) devolverá "Hola"
*/

const recortarTexto = (texto = "", longitud = 0) =>
  typeof texto === "string" && Number.isInteger(longitud) && longitud >= 0
    ? texto.slice(0, longitud)
    : "Error: datos inválidos";

recortarTexto("Hola Mundo", 4); // "Hola"
recortarTexto("Hola", 10);      // "Hola"
recortarTexto("Hola", 0);       // ""
recortarTexto(123, 4);          // "Error: datos inválidos"
recortarTexto("Hola", -1);      // "Error: datos inválidos"


/* explicacion:
slice(0, longitud) corta el texto desde el inicio hasta el número indicado
El condicional valida:
    * que texto sea string
    * que si no es string devuelva error
    * que longitud sea mayor a 0
    * que longitud sea un número entero
*/

module.exports = { recortarTexto };