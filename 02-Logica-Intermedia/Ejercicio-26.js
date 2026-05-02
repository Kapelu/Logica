/*
Programa una función que convierta farenheit a celcius, la función debe retornar el resultado en grados celcius. Por ejemplo, si el valor de farenheit es 100, la función debe retornar 37.77777777777778.
*/
function convertirFahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

module.exports = { convertirFahrenheitACelsius };

/*
Explicación:
1. La función `convertirFahrenheitACelsius` toma un valor en grados Fahrenheit como argumento.
2. Se utiliza la fórmula de conversión de Fahrenheit a Celsius: (F - 32) * 5/9.
3. La función retorna el resultado de la conversión, que es el valor en grados Celsius.
4. El resultado se puede retornar con decimales, dependiendo del valor de entrada en Fahrenheit.
*/