/*
Programar una funcion que invierta un string
Por ejemplo:
miFuncion("Hola") devolverá "aloH"
*/

const invertirString = (str) => {
    if (typeof str !== "string") return "Error: el primer argumento debe ser un string";
    return str.split("").reverse().join("");
}

/* explicación:
Usa función flecha para definir invertirString que recibe un parámetro str
Primero valida si str es un string usando typeof
Si str no es un string, retorna un mensaje de error
Si la validación pasa, usa el método split("") para dividir el string en un array de caracteres
Luego usa el método reverse() para invertir el orden de los caracteres en el array
Finalmente, usa el método join("") para unir los caracteres invertidos de nuevo en un string y lo retorna
*/

module.exports = { invertirString };