/*
Programar una función que genere un número aleatorio entre dos valores. por ejemplo: miFuncion(1, 100) devolverá un número aleatorio entre 1 y 100
*/

const numeroAleatorio = (min, max) => {
    if (typeof min !== "number" || typeof max !== "number") {
        return "Error: ambos valores deben ser números";
    }
    if (min > max) {
        return "Error: el valor mínimo no puede ser mayor que el máximo";
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* explicación:
Usa función flecha para definir numeroAleatorio que recibe dos parámetros: min y max
Valida si min o max no son números usando typeof, si es así retorna un mensaje de error
Valida si min es mayor que max, si es así retorna un mensaje de error
Si las validaciones son correctas, genera un número aleatorio usando Math.random() y lo ajusta al rango entre min y max usando la fórmula: Math.floor(Math.random() * (max - min + 1)) + min
Math.random() genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
Math.floor redondea hacia abajo el resultado para obtener un número entero
*/

module.exports = { numeroAleatorio };