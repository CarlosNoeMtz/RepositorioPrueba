/* Short-Circuit
Los valores que devuelven falso y que se les conoce como 'falsy' son:
- false
- 0
- ''
- null
- undefined
- NaN
*/
// ---------------------------------------------------------------------------

/* 
El operador OR devolvera el primer elemento que evalue en 'true', siempre y cuando todas evaluen en 'true'.
*/
let nombre = '';
let userName = nombre || 'Anonimo';
console.log(userName);

let nombreComp = 'Carlos';
let userName1 = nombreComp || 'Anonimo';
console.log(userName1);


/*
El operador AND se utiliza para ejecutar funciones, siempre y cuando la primera halla evaluado en 'true'.
*/
function fn1(){
    console.log('Soy funcion 1');
    return false;
}

function fn2(){
    console.log('Soy funcion 2');
    return true;
}

 let x = fn1() && fn2();