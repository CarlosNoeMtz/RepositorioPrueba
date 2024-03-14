/* 
AND es representado por: &&
Este operador devolvera 'true' solamente si todas las condiciones evaluan en 'true'.
Devolvera el ultimo elemento que evalue en 'true', siempre y cuando todas evaluen en 'true'.
*/

console.log(true && true);
console.log(true && false);
console.log(false && false);

let mayor = true;
let suscrito = true;
console.log('Operador AND', mayor && suscrito);

/*
OR es representado por: ||
Este operador devolvera 'true' si al menos una condicion evalua en 'true'.
Devolvera el primer elemento que evalue en 'true', siempre y cuando todas evaluen en 'true'.
*/
let mayorEdad = false;
let suscripcion = true;
console.log('Operador OR', mayorEdad || suscripcion);

/*
NOT es representado por: (!) antes de la variable
Este operador invierte el valor de la condicion 
*/
console.log('Operador NOT', !mayorEdad);

let soloCatalogoInfantil = !mayorEdad;
console.log(soloCatalogoInfantil);