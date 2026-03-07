/*
Programa una función que cuente cuantas veces aparece un elemento específico en un array. La función debe retornar el número de veces que el elemento aparece en el array. Por ejemplo, si el array es [1, 2, 3, 2, 4] y el elemento a contar es 2, la función debe retornar 2. 
*/

const contarElementos = (array, elemento) => {
  if (!Array.isArray(array)) {
    return "El primer argumento debe ser un array.";
  }

  if (typeof elemento !== "number") {
    return "El segundo argumento debe ser un número.";
  }
    let elemRep = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            elemRep++;
        }
    }
    return elemRep;
}

module.exports = { contarElementos };

/*
Explicación:
1. La función `contarElementos` toma dos argumentos: un array y un elemento a contar.
2. Se verifica si el primer argumento es un array y si el segundo argumento no es un objeto. Si alguna de estas condiciones no se cumple, se retorna un mensaje de error.
3. Se inicializa una variable `elemRep` en 0 para contar las repeticiones del elemento.
4. Se recorre el array utilizando un bucle `for` y se compara cada elemento del array con el elemento a contar.
5. Si se encuentra una coincidencia, se incrementa el contador `elemRep`.
6. Finalmente, la función retorna el número de veces que el elemento aparece en el array.
*/