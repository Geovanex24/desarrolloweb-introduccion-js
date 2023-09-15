// 03- Variables con const

/**
 * El mayor cambio viene con la declaración "const". A diferencia de las 2 anteriores, "const":
 *
 * - Debe declararse e inicializarse con un valor (obligatoriamente), No pueden declararse sin asignarle un valor!!!!
 * - No se puede modificar ni re-declararse
 *
 *
 *
 * En ámbito profesional o proyectos personales importantes, se recomienda utilizar let y const!
 * ¿Cuando usar CONST?
 * - Se tiene un valor fijo y no se va a modificar
 *
 * ¿Cuando usar LET?
 * Si en su lugar, se desconose el valor que tendrá la variable usar LET.
 */

// 3. ------------------------- CONST -------------------------
const producto = "Audifonos gamer";

const disponible = true;

producto = true;

disponible = true;

/* -- INICIALIZAR MULTIPLES VARIABLES -- */

const producto1 = "Computadora",
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

const nombre_producto = "Monitor HD"; // underscore
const nombreProducto = "Monitor HD"; //camelCase
const NombreProducto = "Monitor HD"; //PascalCase: poco usado en JS, más que cuando se crear una clase
const nombreproducto = "Monitor HD";
