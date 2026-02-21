/*
Programa una función que valide si una palabra o frase dada, es un palíndromo (se lee igual en ambos sentidos), ignorando espacios, signos de puntuación y tildes. por ejemplo: miFunción("Anita lava la tina") devolverá true
*/

const esPalindromo = (texto = "") => {
    if (typeof texto !== "string") return "Error: el valor debe ser una cadena de texto";

    const textoLimpio = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\s\W]/g, "");
    const textoReverso = [...textoLimpio].reverse().join("");

    return textoLimpio === textoReverso;
};

esPalindromo("Anita lava la tina"); // true

/* explicación:
Usa función flecha para definir esPalindromo que recibe un parámetro texto
Valida si el tipo de dato de texto es string, si no lo es retorna un mensaje de error
Limpia el texto eliminando espacios, signos de puntuación y tildes usando toLowerCase, normalize y replace
Invierte el texto limpio usando reverse y join
Compara el texto limpio con su versión invertida para determinar si es un palíndromo
*/

module.exports = { esPalindromo };  