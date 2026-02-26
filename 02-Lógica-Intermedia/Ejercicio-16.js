/*
Programar una funcion que calcule el factorial de un numero dado, el factorial de un numero n es el producto de todos los numeros enteros desde 1 hasta n. Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120. La funcion debe retornar el resultado del factorial.
*/

const factorial = (n) => {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
};

/*
Explicación:
1. La función `factorial` toma un número `n` como argumento.
2. Si `n` es negativo, retorna un mensaje indicando que el factorial no está definido para números negativos.
3. Si `n` es 0 o 1, retorna 1, ya que el factorial de ambos es 1.
4. Para valores mayores que 1, se inicializa una variable `result` en 1 y se multiplica por cada número entero desde 2 hasta `n` utilizando un bucle `for`.
5. Finalmente, la función retorna el resultado del factorial calculado.

Desarrollo en pseudocódigo con PSeInt:

Proceso factorial
    Definir n Como Entero;
    Escribir "Ingrese un número para calcular su factorial:";
    Leer n;
    Si n < 0 Entonces
        Escribir "El factorial no está definido para números negativos.";
        FinProceso
    FinSi
    Si n = 0 O n = 1 Entonces
        Escribir "El factorial de ", n, " es: 1";
        FinProceso
    FinSi
    result <- 1;
    Para i=2 Hasta n Hacer
        result <- result * i;
    FinPara
    Escribir "El factorial de ", n, " es: ", result;
FinProceso
*/

module.exports = {factorial};