const { esParOImpar } = require('../Ejercicio-01.js') 
const { contarCaracteres } = require("../Ejercicio-02.js") 
const { recortarTexto } = require ( "../Ejercicio-03.js") 

describe('*​ - Determinar si un número es par o impar, validar número.', () => {
    test('Validar si es un número', () => {
        expect(esParOImpar("hola")).toBe("Error: debe ser un número")
    }) 
    test('Es un número par', () => {
        expect(esParOImpar(2)).toBe("Es número Par")
    }) 
    test('Es un número impar', () => {
        expect(esParOImpar(3)).toBe("Es número Impar")
    }) 
}) 

describe("* - Función que cuenta el números de caracteres", () => {

    test("Devuelve error si no recibe un string", () => {
        expect(contarCaracteres(123)).toBe("Error: el valor debe ser una cadena de texto")
    })
    test("Devuelve 0 si el string está vacío", () => {
        expect(contarCaracteres("")).toBe(0)
    })
    test("Cuenta correctamente los caracteres", () => {
        expect(contarCaracteres("Hola Mundo")).toBe(10) 
    }) 

    test("Cuenta correctamente emojis", () => {
    expect(contarCaracteres("😀😀😀")).toBe(3) 
    }) 
}) 


describe("* - Función que te devuelva el texto recortado según el número de caracteres indicados.", () => {
    test("Recorta el texto según la longitud indicada", () => {
    expect(recortarTexto("Hola Mundo", 4)).toBe("Hola") 
    }) 

    test("Devuelve el texto completo si la longitud es mayor", () => {
    expect(recortarTexto("Hola", 10)).toBe("Hola") 
    }) 

    test("Devuelve string vacío si la longitud es 0", () => {
    expect(recortarTexto("Hola", 0)).toBe("") 
    }) 

    test("Devuelve error si el texto no es string", () => {
    expect(recortarTexto(123, 4)).toBe("Error: datos inválidos") 
    }) 

    test("Devuelve error si la longitud es negativa", () => {
    expect(recortarTexto("Hola", -1)).toBe("Error: datos inválidos") 
    }) 

    test("Devuelve error si la longitud no es un entero", () => {
    expect(recortarTexto("Hola", 2.5)).toBe("Error: datos inválidos") 
    }) 
}) 

