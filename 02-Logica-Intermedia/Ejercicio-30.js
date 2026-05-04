/*
Programa una función que capitalice la primera letra de cada palabra en un string. La función debe retornar el string con la primera letra de cada palabra en mayúscula. por ejemplo, si el string es "hola mundo", la función debe retornar "Hola Mundo".
*/
function capitalizarPalabras(str) {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
}

module.exports = { capitalizarPalabras }; 

/*Explicación:
1. La función `capitalizarPalabras` toma un string como argumento.
2. Utiliza el método `replace` con una expresión regular para encontrar la primera letra de cada palabra.
3. La expresión regular `\b\w` busca el límite de una palabra seguido de cualquier carácter alfanumérico (la primera letra de la palabra).
4. La función de reemplazo toma la letra encontrada y la convierte a mayúscula utilizando `toUpperCase()`.
5. Finalmente, la función retorna el string con la primera letra de cada palabra capitalizada.
*/  