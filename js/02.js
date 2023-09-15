// 02- Variables con let

/*
    En las nuevas versiones de JavaScript (ES6+), se recomienda utilizar las palabras reservadas 'let' y 'const' para crear variables. 
    A primera vista, puede parecer que 'var' y 'let' son lo mismo, pero, a pesar de las apariencias,
    'let' introduce nuevas reglas que contribuirán a crear un código más limpio y ordenado.

    VAR vs LET

    VAR permite: 
    - Declararse e inicializarse (opcional)
    - Pueden ser modificadas y re-declaradas.

    LET nos permite:
    - Declararse e inicializarse (opcional)
    - Pueden ser modificadas (podrá cambiar su valor) pero NO ser Re-declaradas

    Ambas siguen las mismas reglas y estilos para crear variables, vistas anteriormente.
    
*/

// 2. ------------------------- LET -------------------------
let producto = "Audifonos gamer";

let disponible;

producto = true;

disponible = true;

/* -- INICIALIZAR MULTIPLES VARIABLES -- */

let producto1 = "Computadora",
  disponible1 = true,
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

let nombre_producto = "Monitor HD"; // underscore
let nombreProducto = "Monitor HD"; //camelCase
let NombreProducto = "Monitor HD"; //PascalCase: poco usado en JS, más que cuando se crear una clase
let nombreproducto = "Monitor HD";
