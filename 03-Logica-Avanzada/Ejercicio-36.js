/*
Programa una función que cree un contador con clousures, el contador se iniciará en 0 y cada vez que se ejecute la función se incrementará su valor en uno, muestra el valor del contador cada vez que se ejecute la función. 
*/
function clousure() {
    let count = 0
    return function() {
        count++
        return count
    };
}

module.exports = { clousure };

/*
Explicación:
1. La función `clousure` define una variable `count` que se inicializa en 0.
2. Retorna una función anónima que, cada vez que se ejecuta, incrementa `count` en 1 y devuelve su valor.
3. Al usar esta función, se crea un contador que mantiene su estado a través de los cierres (closures) en JavaScript.
4. Cada vez que se llama a la función retornada, el contador se incrementa y muestra su valor actualizado.
*/  