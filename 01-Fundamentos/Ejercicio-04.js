/*
Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.
Por ejemplo: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
*/

const separarTexto = (texto = "", separador = " ") =>
    typeof texto === "string" && separador
        ? texto.split(separador)
        : "Error: datos inválidos";

separarTexto("hola que tal", " "); // ["hola", "que", "tal"]

/* explicaion:
Usa funcion flecha para definir separarTexto que recibe dos parámetros: texto y separador
usa operador ternario para validar si texto es una cadena de texto y separador no está vacío
Si ambas condiciones son verdaderas, retorna un array usando texto.split(separador)
Si alguna condición es falsa, muestra un mensaje de error en la consola.
texto.split(separador) divide la cadena de texto en un array usando el separador indicado
El condicional valida:
    * que texto sea string usando typeof
    * que separador no esté vacío (evaluación implícita)
*/

module.exports = { separarTexto };
