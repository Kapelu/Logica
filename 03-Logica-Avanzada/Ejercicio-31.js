/*
Programa una funcion que compare 2 arrays y devuelva los elementos en comun, ejemplo miFuncion([1,2,3],[1,4]) Devuelve [1]
*/
const elementosEnComun = (arr1, arr2) => {
  if (!arr1 || !arr2) return []
  if (arr1.length === 0) return []
  if (arr2.length === 0) return []

  return arr1.filter((el) => arr2.includes(el))
}

module.exports = { elementosEnComun };

/*
Explicación:
1. La función `elementosEnComun` toma dos argumentos, `arr1` y `arr2`, que se espera sean arreglos.
2. Se realizan varias validaciones:
    - Si alguno de los arreglos no es proporcionado, se muestra una advertencia indicando que no se ingresaron ambos arreglos.
    - Si el primer arreglo está vacío, se muestra una advertencia indicando que el primer arreglo está vacío.
    - Si el segundo arreglo está vacío, se muestra una advertencia indicando que el segundo arreglo está vacío.
3. Se utiliza el método `filter` para crear un nuevo arreglo `resultado` que contiene solo los elementos de `arr1` que también están presentes en `arr2` utilizando el método `includes`.
4. Finalmente, se verifica si el arreglo `resultado` está vacío. Si lo está, se informa que no hay elementos en común; de lo contrario, se muestra cuáles son los elementos en común.  
*/  