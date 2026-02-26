/*
Programa una función que encuentre el número mayor en un array. El número mayor es el valor más grande en el array. La función debe retornar el número mayor encontrado en el array. por ejemplo, si el array es [3, 5, 7, 2], la función debe retornar 7.
*/

const encontrarMayor = (array) => {
    if (array.length === 0) {
        return "El array está vacío.";
    }
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }
    return mayor;
};


module.exports = { encontrarMayor };    

/*
Explicación:
1. La función `encontrarMayor` toma un array como argumento.
2. Si el array está vacío, retorna un mensaje indicando que el array no contiene elementos.
3. Se inicializa una variable `mayor` con el primer elemento del array.
4. Se recorre el array desde el segundo elemento hasta el final utilizando un bucle `for`.
5. Si se encuentra un elemento que es mayor que el valor actual de `mayor`, se actualiza `mayor` con ese nuevo valor.
6. Finalmente, la función retorna el número mayor encontrado en el array.

Desarrollo en pseudocódigo con PSeInt:

Proceso encontrarMayor
    Definir array Como Entero;
    Escribir "Ingrese los elementos del array (separados por comas):";
    Leer array;
    Si longitud(array) = 0 Entonces
        Escribir "El array está vacío.";
        FinProceso
    FinSi
    mayor <- array[0];  
    Para i=1 Hasta longitud(array)-1 Hacer 
        Si array[i] > mayor Entonces
            mayor <- array[i];
        FinSi
    FinPara
    Escribir "El número mayor en el array es: ", mayor;
FinProceso

*/

