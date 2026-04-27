const {
    esParOImpar,
    contarCaracteres,
    recortarTexto,
    separarTexto,
    repetirString,
    invertirString,
    convertirMayusculasMinusculas,
    sumarSinMas,
    numeroAleatorio,
    tipoDato,
    verificarNumero,
    contarVocales,
    contarConsonantes,
    esPalindromo,
    compararNumeros,
    factorial,
    esPrimo,
    encontrarMayor,
    menorEnArray,
    sumarArray,
    promediarArray,
    eliminarDuplicados,
    contarElementos,
    ordenarArray,
    invertirArray
} = require("../utils/index.js");   

    describe('01​-Determinar si un número es par o impar, validar número.', () => {
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

    describe("02-Función que cuenta el números de caracteres", () => {

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


    describe("03-Función que te devuelva el texto recortado según el número de caracteres indicados.", () => {
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
            expect(recortarTexto("Hola",-1)).toBe("Error: datos inválidos")
        })

        test("Devuelve error si la longitud no es un entero", () => {
            expect(recortarTexto("Hola", 2.5)).toBe("Error: datos inválidos")
        })
    })

    describe('04-Función que separa un string en un array de strings según un separador', () => {

        test('separa un texto usando el separador por defecto', () => {
            const resultado = separarTexto("hola que tal", " ") 
            expect(resultado).toEqual(["hola", "que", "tal"]) 
        }) 

        test('separa un texto usando otro separador', () => {
            const resultado = separarTexto("hola-que-tal", "-") 
            expect(resultado).toEqual(["hola", "que", "tal"]) 
        }) 

        test('devuelve error si el texto no es string', () => {
            const resultado = separarTexto(123, " ") 
            expect(resultado).toBe("Error: datos inválidos") 
        }) 

        test('devuelve error si no hay separador', () => {
            const resultado = separarTexto("hola que tal", "") 
            expect(resultado).toBe("Error: datos inválidos") 
        }) 

    }) 

    describe('05-funcion que repite un string n veces', () => {

        test('devuelve error si el primer argumento no es un string', () => {
            const resultado = repetirString(123, 3) 
            expect(resultado).toBe("Error: el primer argumento debe ser un string") 
        }) 
    
        test('devuelve error si el segundo argumento no es un número', () => {
            const resultado = repetirString("Hola", "tres") 
            expect(resultado).toBe("Error: el segundo argumento debe ser un número") 
        }) 
    
        test('devuelve error si el número de repeticiones es negativo', () => {
            const resultado = repetirString("Hola",-1) 
            expect(resultado).toBe("Error: el número de repeticiones no puede ser negativo") 
        }) 
    
        test('función que repita un string n veces.', () => {
            const resultado = repetirString("Hola", 3) 
            expect(resultado).toBe("HolaHolaHola") 
        }) 
    }) 

    describe('06-funcion que invierte un string', () => {

        test('devuelve error si el argumento no es un string', () => {
            const resultado = invertirString(12345) 
            expect(resultado).toBe("Error: el primer argumento debe ser un string") 
        }) 
    
        test('función que invierte un string.', () => {
            const resultado = invertirString("Hola") 
            expect(resultado).toBe("aloH") 
        }) 
    }) 

    describe("07-funcion que convierte texto a mayúsculas y minúsculas", () => {
        test("devuelve error si el argumento no es un string", () => {
        expect(() => convertirMayusculasMinusculas(123)).toThrow('El valor "123" ingresado, No es una cadena de texto',
        );
    });

        test("función que convierte texto a mayúsculas y minúsculas.", () => {
        const resultado = convertirMayusculasMinusculas("Hola Mundo");
        expect(resultado).toBe("Texto original: Hola Mundo\nTexto mayúsculas: HOLA MUNDO\nTexto minúsculas: hola mundo",
        );
    });
    });
    describe("08-funcion que suma dos números sin usar +", () => {
        test("función que suma dos números sin usar +.", () => {
            const resultado = sumarSinMas(5, 5) 
            expect(resultado).toBe(10) 
        }) 
    }) 

    describe("09-funcion que genera un número aleatorio entre dos valores", () => {
        test("devuelve error si alguno de los argumentos no es un número", () => {
            const resultado = numeroAleatorio("a", 10) 
            expect(resultado).toBe("Error: ambos valores deben ser números") 
        }) 

        test("devuelve error si el valor mínimo es mayor que el máximo", () => {
            const resultado = numeroAleatorio(10, 5) 
            expect(resultado).toBe("Error: el valor mínimo no puede ser mayor que el máximo") 
        }) 

        test("genera un número aleatorio entre dos valores.", () => {
            const resultado = numeroAleatorio(1, 100) 
            expect(resultado).toBeGreaterThanOrEqual(1) 
            expect(resultado).toBeLessThanOrEqual(100) 
        }) 
    }) 

    describe("10-funcion que retorna el tipo de dato recibido", () => {
        test("retorna el tipo de dato recibido.", () => {
            expect(tipoDato(5)).toBe("number") 
            expect(tipoDato("Hola")).toBe("string") 
            expect(tipoDato(true)).toBe("boolean") 
            expect(tipoDato(null)).toBe("object") 
            expect(tipoDato(undefined)).toBe("undefined") 
            expect(tipoDato({})).toBe("object") 
            expect(tipoDato([])).toBe("object") 
        }) 
    }) 

    describe("11-funcion que verifica si un número es positivo, negativo o cero", () => {
        test("devuelve 'positivo' si el número es mayor que cero", () => {
            expect(verificarNumero(5)).toBe("positivo") 
        }) 

        test("devuelve 'negativo' si el número es menor que cero", () => {
            expect(verificarNumero(-3)).toBe("negativo") 
        }) 

        test("devuelve 'cero' si el número es igual a cero", () => {
            expect(verificarNumero(0)).toBe("cero") 
        }) 
    })

    describe("12-funcion que cuenta las vocales en un string", () => {
        test("cuenta las vocales en un string.", () => {
            const resultado = contarVocales("Hola Mundo") 
            expect(resultado).toBe(4) 
        }) 
    }) 

    describe("13-funcion que cuenta las consonantes en un string", () => {
        test("cuenta las consonantes en un string.", () => {
            const resultado = contarConsonantes("Hola Mundo") 
            expect(resultado).toBe(5) 
        }) 
    }) 

    describe("14-funcion que valida si una palabra o frase dada, es un palíndromo", () => {
        test("valida si una palabra o frase dada, es un palíndromo.", () => {
            const resultado = esPalindromo("Anita lava la tina"); 
            expect(resultado).toBe(true) 
        }) 
    })

    describe("15-funcion que compara dos números y devuelve el mayor", () => {
        test("devuelve error si alguno de los argumentos no es un número", () => {
            const resultado = compararNumeros("a", 10) 
            expect(resultado).toBe("Error: ambos parámetros deben ser números") 
        })
    
        test("devuelve el mayor de dos números", () => {
            const resultado = compararNumeros(5, 10) 
            expect(resultado).toBe(10) 
        })
        
        test("devuelve mensaje si ambos números son iguales", () => {
            const resultado = compararNumeros(5, 5) 
            expect(resultado).toBe("Ambos números son iguales") 
        })
    })

    describe("16-funcion que calcula el factorial de un número dado", () => {
        test("devuelve error si el número es negativo", () => {
            const resultado = factorial(-5) 
            expect(resultado).toBe("El factorial no está definido para números negativos.") 
        })

        test("devuelve 1 si el número es 0", () => {
            const resultado = factorial(0) 
            expect(resultado).toBe(1) 
        })

        test("devuelve 1 si el número es 1", () => {
            const resultado = factorial(1) 
            expect(resultado).toBe(1) 
        })

        test("calcula el factorial de un número dado.", () => {
            const resultado = factorial(5) 
            expect(resultado).toBe(120) 
        })
    })

    describe("17-funcion que verifica si un número es primo", () => {
        test("devuelve error si el argumento no es un número", () => {
            const resultado = esPrimo("a") 
            expect(resultado).toBe("Error: debe ser un número") 
        })
        
        test("devuelve false si el número es menor que 2", () => {
            const resultado = esPrimo(1) 
            expect(resultado).toBe(false) 
        })

        test("devuelve false si el número no es primo", () => {
            const resultado = esPrimo(8) 
            expect(resultado).toBe(false) 
        })

        test("verifica si un número es primo.", () => {
            const resultado = esPrimo(7) 
            expect(resultado).toBe(true) 
        })
    })

    describe("18-funcion que encuentra el número mayor en un array", () => {
        test("devuelve error si el array está vacío", () => {
            const resultado = encontrarMayor([]) 
            expect(resultado).toBe("El array está vacío.") 
        })

        test("encuentra el número mayor en un array.", () => {
            const resultado = encontrarMayor([3, 5, 7, 2]) 
            expect(resultado).toBe(7) 
        })
    })

    describe("19-funcion que encuentra el número menor en un array de números", () => {
        test("devuelve error si no se ingresa un arreglo", () => {
            const resultado = menorEnArray() 
            expect(resultado).toBe("No ingresaste un arreglo de números") 
        })

        test("devuelve error si el valor ingresado no es un arreglo", () => {
            const resultado = menorEnArray("no es un arreglo") 
            expect(resultado).toBe("El valor que ingresaste no es un arreglo") 
        })

        test("devuelve error si el arreglo está vacío", () => {
            const resultado = menorEnArray([]) 
            expect(resultado).toBe("El arreglo está vacío") 
        })

        test("devuelve error si algún valor del arreglo no es un número", () => {
            const resultado = menorEnArray([1, 2, "tres", 4]) 
            expect(resultado).toBe('El valor "tres" no es un número') 
        })

        test("encuentra el número menor en un array de números.", () => {
            const resultado = menorEnArray([4, 2, 8, 6]) 
            expect(resultado).toBe(2) 
        })
    })

    describe("20-funcion que suma todos los valores de un array", () => {
        test("devuelve error si no se ingresa un arreglo", () => {
            const resultado = sumarArray() 
            expect(resultado).toBe("No ingresaste un arreglo de números") 
        })

        test("devuelve error si el valor ingresado no es un arreglo", () => {
            const resultado = sumarArray("no es un arreglo") 
            expect(resultado).toBe("El valor que ingresaste no es un arreglo") 
        })

        test("devuelve error si el arreglo está vacío", () => {
            const resultado = sumarArray([]) 
            expect(resultado).toBe("El arreglo está vacío") 
        })

        test("devuelve error si algún valor del arreglo no es un número", () => {
            const resultado = sumarArray([1, 2, "tres", 4]) 
            expect(resultado).toBe('El valor "tres" no es un número') 
        })
        
        test("suma todos los valores de un array.", () => {
            const resultado = sumarArray([1, 2, 3, 4]) 
            expect(resultado).toBe(10) 
        })
    })

    describe("21-funcion que promedia los valores de un array", () => {
        test("devuelve error si no se ingresa un arreglo", () => {
            const resultado = promediarArray() 
            expect(resultado).toBe("No ingresaste un arreglo de números") 
        })

        test("devuelve error si el valor ingresado no es un arreglo", () => {
            const resultado = promediarArray("no es un arreglo") 
            expect(resultado).toBe("El valor que ingresaste no es un arreglo") 
        })

        test("devuelve error si el arreglo está vacío", () => {
            const resultado = promediarArray([]) 
            expect(resultado).toBe("El arreglo está vacío") 
        })
        
        test("devuelve error si algún valor del arreglo no es un número", () => {
            const resultado = promediarArray([1, 2, "tres", 4]) 
            expect(resultado).toBe('El valor "tres" no es un número')       
        })

        test("promedia los valores de un array.", () => {
            const resultado = promediarArray([1, 2, 3, 4]) 
            expect(resultado).toBe(2.5) 
        })
    })

    describe("22-funcion que elimina los valores duplicados de un array", () => {
        test("devuelve error si no se ingresa un arreglo", () => {
            const resultado = eliminarDuplicados() 
            expect(resultado).toBe("No ingresaste un arreglo de números") 
        })  
        
        test("devuelve error si el valor ingresado no es un arreglo", () => {
            const resultado = eliminarDuplicados("no es un arreglo") 
            expect(resultado).toBe("El valor que ingresaste no es un arreglo") 
        })

        test("elimina los valores duplicados de un array.", () => {
            const resultado = eliminarDuplicados([1, 2, 3, 2, 4]) 
            expect(resultado).toEqual([1, 2, 3, 4]) 
        })
    })  

    describe("23-funcion que cuenta el número de elementos únicos en un array", () => {
        test("devuelve error si no se ingresa un arreglo", () => {
            const resultado = contarElementos() 
            expect(resultado).toBe("No ingresaste un arreglo de números") 
        })

        test("devuelve error si el valor ingresado no es un arreglo", () => {
            const resultado = contarElementos("no es un arreglo") 
            expect(resultado).toBe("El valor que ingresaste no es un arreglo") 
        })

        test("cuenta el número de elementos únicos en un array.", () => {
            const resultado = contarElementos([1, 2, 3, 2, 4]) 
            expect(resultado).toBe(4) 
        })
    })

    describe("24-funcion que ordena un array sin usar sort()", () => {
        test("ordena un array sin usar sort().", () => {
            const resultado = ordenarArray([7,5,2,4,3,9]) 
            expect(resultado).toEqual([2,3,4,5,7,9]) 
        })
    }) 

    describe("25-funcion que invierte un array sin usar reverse()", () => {
        test("invierte un array sin usar reverse().", () => {
            const resultado = invertirArray([1,2,3]) 
            expect(resultado).toEqual([3,2,1]) 
        })
    })