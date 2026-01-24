/*
Programa una función que cuente el número de caracteres string.
Por ejemplo: miFunción("Hola Mundo") devolverá 10
*/

const contarCaracteres = (texto = "") =>
    typeof texto === "string"
        ? [...texto].length
    : "Error: el valor debe ser una cadena de texto";

contarCaracteres("Hola Mundo"); // 10


/* explicaion:
Usa funcion flecha para definir contarCaracteres que recibe un parámetro texto
usa operador ternario para validar si texto es una cadena de texto
Si es una cadena de texto, retorna el número de caracteres usando texto.length
Si no es una cadena de texto, muestra un mensaje de error en la consola.
texto.length devuelve la cantidad de caracteres de una cadena de texto
El condicional valida que texto sea string usando typeof
*/