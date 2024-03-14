/* El operador 'while' sirve para ejecutar una porcion de codigo multiples veces.
El operador 'while' evalua la condicion al inicio del loop.
Encontrar los numeros pares del 1 al 10
*/

let i = 0;
while (i < 10){
    if (i % 2 == 0){ // Codigo para encontrar numeros pares
        console.log('Numero par', i);
    } else if (i % 2 == 1) {
        console.log('Numero impar', i);
    }
    i++;
}