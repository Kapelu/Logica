const { esParOImpar } = require('../Ejercicio-01.js');

describe('Determinar si un número es par o impar, validar número.', () => {
    it('Validar si es un número', () => {
        expect(esParOImpar("hola")).toBe("Error: debe ser un número");
    });
    it('Es un número par', () => {
        expect(esParOImpar(2)).toBe("Es número Par");
    });
    it('Es un número impar', () => {
        expect(esParOImpar(3)).toBe("Es número Impar");
    });
});
