/*
Programa una función que genere la serie de Fibonacci hasta un número dado. La función debe retornar un array con la serie de Fibonacci. Por ejemplo, si el número dado es 10, la función debe retornar [0, 1, 1, 2, 3, 5, 8,13, 21, 34].
*/
function Fibonacci(n) {
  const resultado = []

  let a = 0
  let b = 1

  for (let i = 0; i < n; i++) {
    resultado.push(a)
    const temp = a + b
    a = b
    b = temp
  }

  return resultado
}

module.exports = { Fibonacci };

/*
Explicación:
1. La función `Fibonacci` toma un número `n` como argumento, que representa la cantidad de números en la serie de Fibonacci que se desea generar.
2. Se inicializa un array `resultado` para almacenar los números de la serie.
3. Se utilizan dos variables `a` y `b` para mantener los dos últimos números de la serie, comenzando con 0 y 1 respectivamente.
4. Se utiliza un bucle `for` que itera `n` veces, durante cada iteración se agrega el valor de `a` al array `resultado`, luego se calcula el siguiente número de la serie sumando `a` y `b`, y se actualizan las variables `a` y `b`.
5. Finalmente, la función retorna el array con la serie de Fibonacci generada.
*/  