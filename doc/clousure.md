# Closure

Es una función que recuerda el contexto donde fue creada, incluso después de que ese contexto ya terminó de ejecutarse.

En JavaScript esto significa que una función interna puede seguir accediendo a variables de una función externa aunque la función externa ya haya finalizado.

Idea básica

Cuando hacés esto:
```js
function externa() {
  let mensaje = "Hola"

  function interna() {
    console.log(mensaje)
  }

  return interna
}

const fn = externa()

fn()
```

La salida es:
```js
Hola
```

Aunque externa() ya terminó, la función interna() sigue teniendo acceso a mensaje.

Eso es un closure.

¿Por qué existe?

Porque JavaScript guarda una referencia al entorno léxico donde la función fue creada.

No guarda una copia.
Guarda el acceso real a esas variables.

### Ejemplo real: contador

Este es el ejemplo clásico y el más útil para entender closures.
```js
function crearContador() {
  let contador = 0

  return function () {
    contador++
    return contador
  }
}

const incrementar = crearContador()

console.log(incrementar()) // 1
console.log(incrementar()) // 2
console.log(incrementar()) // 3
```

> Qué está pasando internamente
1. Se ejecuta:
```js
crearContador()
```

Se crea:
```js
let contador = 0
```
2. La función retorna otra función

```js
return function () {
  contador++
  return contador
}
```

Esa función interna queda almacenada en:

```js
const incrementar
```

3. crearContador() termina

Normalmente sus variables deberían destruirse.

***PERO***:

Como la función retornada todavía usa contador,
JavaScript mantiene viva esa variable.

Ahí aparece el closure.

Visualmente

```md
crearContador()
 ├── contador = 0
 └── retorna función interna
         ↓
incrementar()
         ↓
sigue teniendo acceso a contador
```

Otro ejemplo más profesional

#### Un contador privado:

```js
function contadorPrivado() {
  let valor = 0

  return {
    incrementar() {
      valor++
    },

    disminuir() {
      valor--
    },

    obtener() {
      return valor
    }
  }
}

const contador = contadorPrivado()

contador.incrementar()
contador.incrementar()

console.log(contador.obtener()) // 2

console.log(contador.valor) // undefined
```

Ventaja importante

### _Encapsulamiento_

La variable:

`valor`

No puede modificarse desde afuera.

Solo mediante los métodos públicos.

Esto se parece muchísimo a atributos privados en POO.

## _Casos reales donde se usan closures_

* ## Callbacks
```js
button.addEventListener("click", () => {
  console.log("click")
})
```

* ## Timers
```js
setTimeout(() => {
  console.log("Hola")
}, 1000)
```

* ## Factory functions
```js
function crearUsuario(nombre) {
  return {
    saludar() {
      console.log(`Hola ${nombre}`)
    }
  }
}
```

* ## React Hooks

Internamente React usa closures constantemente. Por ejemplo:

```js
useEffect(() => {
  console.log(count)
}, [])
Problema común con closures
Variables compartidas accidentalmente
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
```

Resultado:

```js
3
3
3
```
Porque `var` NO tiene scope de bloque y todos los closures comparten la misma i.

La solución moderna:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
```
Resultado:

```js
0
1
2
```

> ### Resumen corto

Un `closure` es: Una función que conserva acceso a las variables del contexto donde fue creada, incluso después de que ese contexto terminó.

Y se usa muchísimo para:

* encapsular estado
* crear variables privadas
* callbacks
* timers
* factories
* hooks
* programación funcional

El ejemplo más clásico es justamente un contador porque muestra cómo una variable puede persistir entre ejecuciones sin ser global.