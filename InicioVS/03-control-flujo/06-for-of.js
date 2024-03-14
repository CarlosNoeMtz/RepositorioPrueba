/*
El operador 'for of' tambien es un loop y sirve para iterar elementos de manera mas sencilla.
*/

let animales = ['Perro', 'Caballo', 'Gato']

for (let animal of animales){
    console.log(animal);
}

// Ejemplo de como se haria con otros operadores.

let i = 0;
while (i < animales.length){
    console.log(animales[i]);
    i++
}