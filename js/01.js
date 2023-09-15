// 01- Variables

/*
    Existen 3 formas de crear variables (En nuevas versiones solo 2)

    -var
    -let (ES6+)
    -const (ES6+)

    ** Es la forma de indicarle a JS que vamos a declarar una variable **

    ¿Cómo se declara una variable? Bueno consta de 3 partes...

    1. Utilizamos la palabra reservada "var", "let o "const"
    2. El nombre de la variable
    3. Asignamos un valor a la variable

    Nota: podemos crear una varibale y asignarle un valor, o simplemente inicializar la variable sin ningún valor.

    -- DINAMICO --
    Javascript se le considera un lenguaje de tipo dinámico ¿Qué quiere decir esto? Lenguajes como Java, C#, C, entre otros, 
    se les debe especficar el tipo de dato (enteros, strings, booleanos, etc) que almacenará la variable. En JS no es necesario indicarlo,
    ya que este interpreta el tipo de datos, según el valor de la variable.

    En un lenguaje de tipo dinámico, se guarda el tipo de dato en el valor y no en la variable.

    
*/

// ------------------------- VAR -------------------------
var producto = "Audifonos gamer"; //Iniciar variable y asignarle un valor

var disponible; //Iniciamos la variable pero no asignamos ningún valor

producto = true;

disponible = true;

/* -- INICIALIZAR MULTIPLES VARIABLES -- */

var producto1 = "Computadora",
  disponible = true,
  categoria = "computadoras";

// -- REGLAS DE LAS VARIABLES --

/* 
  - Las variables pueden tener letras, números, ciertos carácteres
  - PERO NO pueden comenzar con "números" 
  - Pueden iniciar con "-"
*/

// var 1disponible; NO
// var -disponible; SI

// -- ESTILOS PARA CREAR VARIABLES --

var nombre_producto = "Monitor HD"; // underscore
var nombreProducto = "Monitor HD"; //camelCase
var NombreProducto = "Monitor HD"; //PascalCase: poco usado en JS, más que cuando se crear una clase
var nombreproducto = "Monitor HD";
