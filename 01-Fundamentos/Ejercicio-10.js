/*
Programa una función que retorne el tipo de dato recibido. por ejemplo: miFuncion(5) devolverá "number"
*/

const tipoDato = (dato) => typeof dato;

/* explicación:
Usa función flecha para definir tipoDato que recibe un parámetro: dato
Retorna el tipo de dato usando el operador typeof
El operador typeof devuelve una cadena que indica el tipo de dato del operando
*/

module.exports = { tipoDato };