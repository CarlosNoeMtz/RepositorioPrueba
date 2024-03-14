/*
Para detener los operadores de loop se utiliza 'break'.
Para saltar alguna operacion de los operadores de loop se utiliza 'continue'.
*/

let i = 0;
while (i < 6){
    i++;
    if (i === 2) {
        continue;
    }
    if (i === 4) {
        break;
    }
    console.log(i);
}

// Se utilizan para los operadores 'while', 'for', 'for in', 'for of', 'do while'.