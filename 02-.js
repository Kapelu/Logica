/*
Programa una función que te devuelva el texto recortado según el número de caracteres indicados.
Por ejemplo: miFunción("Hola Mundo", 4) devolverá "Hola"
*/

const recortarTexto = (texto = "", longitud = 0) =>
    typeof texto === "string" && longitud > 0
    ? texto.slice(0, longitud)
    : "Error: datos inválidos";

  recortarTexto("Hola Mundo", 4); // "Hola"


/* explicaion:
slice(0, longitud) corta el texto desde el inicio hasta el número indicado
El condicional valida:
    * que texto sea string
    * que longitud sea mayor a 0
*/