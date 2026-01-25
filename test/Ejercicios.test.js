const { esParOImpar } = require('../Ejercicio-01.js');
const { contarCaracteres } = require("../Ejercicio-02.js");

describe('*​ - Determinar si un número es par o impar, validar número.', () => {
    test('Validar si es un número', () => {
        expect(esParOImpar("hola")).toBe("Error: debe ser un número")
    });
    test('Es un número par', () => {
        expect(esParOImpar(2)).toBe("Es número Par")
    });
    test('Es un número impar', () => {
        expect(esParOImpar(3)).toBe("Es número Impar")
    });
});

describe("* - Función que cuenta el números de caracteres", () => {

    test("Devuelve error si no recibe un string", () => {
        expect(contarCaracteres(123)).toBe("Error: el valor debe ser una cadena de texto")
    })
    test("Devuelve 0 si el string está vacío", () => {
        expect(contarCaracteres("")).toBe(0)
    })
    test("Cuenta correctamente los caracteres", () => {
        expect(contarCaracteres("Hola Mundo")).toBe(10);
    });

    test("Cuenta correctamente emojis", () => {
    expect(contarCaracteres("😀😀😀")).toBe(3);
    });
});
