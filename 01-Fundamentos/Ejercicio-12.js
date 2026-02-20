/*
Programa una función que cuente las vocales en un string. per ejemplo: miFuncion("Hola Mundo") devolverá 4
*/

const contarVocales = (str) => {
  const vocales = "aeiouAEIOU";
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (vocales.includes(str[i])) {
      contador++;
    }
  }

  return contador;
};

/* explicación:
Usa función flecha para definir contarVocales que recibe un parámetro: str
Define una cadena vocales que contiene todas las vocales en mayúscula y minúscula
Inicializa un contador en cero
Usa un bucle for para iterar sobre cada carácter de str
Dentro del bucle, usa el método includes para verificar si el carácter actual es una vocal
Si es una vocal, incrementa el contador
Después del bucle, retorna el valor del contador
*/

module.exports = { contarVocales };