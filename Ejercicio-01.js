/*
Programa una función que determine si un número es par o impar.
Por ejemplo: miFuncion(4) devolverá "Par"
miFuncion(3) devolverá "Impar"
*/

const esParOImpar = (num) => {
    if (typeof num !== "number") return "Error: debe ser un número";
    return num % 2 === 0 ? "Es número Par" : "Es número Impar";
};

console.log(esParOImpar("hola")); // "Error: debe ser un número"