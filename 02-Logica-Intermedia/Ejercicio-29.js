/*
Programa una función que valide si un e-mail es correcto con regex, la función debe retornar true si el e-mail es correcto y false si no lo es. Por ejemplo, si el valor del e-mail es "usuario@dominio.com", la función debe retornar true.
*/
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

module.exports = { validarEmail };

/*Explicación: 
1. La función `validarEmail` toma un string como argumento.
2. Se define una expresión regular `regex` que valida el formato de un e-mail.
3. La expresión regular verifica que el e-mail tenga un formato válido con un nombre de usuario, un símbolo @, un dominio y una extensión.
4. La función utiliza el método `test` de la expresión regular para comprobar si el e-mail cumple con el formato válido.
5. Retorna true si el e-mail es correcto y false si no lo es.
*/  