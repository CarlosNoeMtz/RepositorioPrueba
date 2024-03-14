/* 
El operador 'do while' evalua la condicion al final del loop.
Primero se ejecuta la porcion de codigo y luego realiza la evaluacion de la condicion.
*/

let i = 2;
do {
    if (i % 2 == 0){ 
        console.log('Numero par', i);
    }
    i++;
} while (i < 2);