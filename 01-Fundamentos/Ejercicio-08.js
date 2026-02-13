/*
Programa una funcion que pueda sumar dos números sin usar +. por ejemplo miFuncion(5, 5) devolverá 10
*/
function sumarSinMas(a, b) {
    return a - (-b);
}

module.exports = { sumarSinMas };

/* explicación:
La función sumarSinMas recibe dos parámetros: a y b
Para sumar sin usar el operador +, se puede restar el negativo de b a a
El operador - aplicado a un número convierte ese número en su negativo, por lo que -(-b) es igual a b
Entonces, al restar -b de a, se obtiene el resultado de sumar a y b
Por ejemplo, si a es 5 y b es 5, entonces -(-5) es igual a 5, y 5 - (-5) es igual a 10
*/  