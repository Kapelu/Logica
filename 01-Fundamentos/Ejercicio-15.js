/*
Programa una función que compare dos números y devolver el mayor. por ejemplo:
miFuncion(5, 3) devolverá 5
miFuncion(1, 4) devolverá 4
miFuncion(2, 2) devolverá "Ambos números son iguales" 
*/

const compararNumeros = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") return "Error: ambos parámetros deben ser números";
    if (num1 > num2) return num1;
    if (num2 > num1) return num2;
    return "Ambos números son iguales";
};

/* explicación:
Usa función flecha para definir compararNumeros que recibe dos parámetros num1 y num2
Primero valida si ambos parámetros son números usando typeof
Si alguno de los parámetros no es un número, retorna un mensaje de error
Luego compara num1 y num2 usando condicionales if
Si num1 es mayor que num2, retorna num1
Si num2 es mayor que num1, retorna num2
Si ambos números son iguales, retorna un mensaje indicando que son iguales
*/

module.exports = { compararNumeros };