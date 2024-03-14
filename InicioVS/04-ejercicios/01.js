// Crear una funcion con 2 parametros y encontar cual es la mayor.

function cualEsMayor (a, b) {
    if (a > b){
        return a;
    } else {
        return b;
    }
}

let mayor = cualEsMayor (10, 5);
console.log(mayor);

// Otra forma de resolver:

function cualEsMayor (a, b) {
  return (a > b) ? a : b;
}

let mayor2 = cualEsMayor (10, 5);
console.log(mayor);