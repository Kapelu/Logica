/*
Programa una función que pueda erificar si un número es positivo, negativo o cero. por ejemplo: miFuncion(3) devolverá "positivo"
*/

const verificarNumero = (num) => {
  if (num > 0) {
    return "positivo";
  } else if (num < 0) {
    return "negativo";
  } else {
    return "cero";
  }
};

/* explicación:
Usa función flecha para definir verificarNumero que recibe un parámetro: num
Usa una estructura condicional if-else para verificar si num es mayor, menor o igual a cero
Retorna "positivo" si num es mayor que cero, "negativo" si num es menor que cero, y "cero" si num es igual a cero
*/

module.exports = { verificarNumero };   