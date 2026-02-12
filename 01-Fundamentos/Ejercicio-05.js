/*
Programa una función que repita un string n veces.
Por ejemplo:
miFuncion("Hola", 3) devolverá "Hola Hola Hola"
*/

const repetirString = (str, n) => {
    if (typeof str !== "string") return "Error: el primer argumento debe ser un string";
    if (typeof n !== "number") return "Error: el segundo argumento debe ser un número";
    if (n < 0) return "Error: el número de repeticiones no puede ser negativo";
    return str.repeat(n).trim();
}

/* explicación:
Usa función flecha para definir repetirString que recibe dos parámetros: str y n
Primero valida si str es un string usando typeof
Si str no es un string, retorna un mensaje de error
Luego valida si n es un número usando typeof
Si n no es un número, retorna un mensaje de error
También valida si n es negativo, ya que no tiene sentido repetir un string un número negativo de veces
Si n es negativo, retorna un mensaje de error
Si las validaciones pasan, usa el método repeat() para repetir el string str n veces
El método repeat() devuelve una nueva cadena con el string repetido n veces, pero puede agregar espacios adicionales, por lo que se usa trim() para eliminar cualquier espacio extra al principio o al final del resultado.
*/  

module.exports = { repetirString };