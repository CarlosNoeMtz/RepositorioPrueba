/*
La instruccion de 'for in' sirve para iterar las propiedades de un objeto.
*/

let usuario = {
    id: 1,
    nombre: 'Carlos',
    edad: 23,
}

for (let propiedad in usuario){
    console.log(propiedad);
}

// Para obtener el nombre y ademas el valor de las propiedades:

for (let propiedad in usuario){
    console.log(propiedad, usuario[propiedad]);
}

/* Ejemplo de como se iteran los elementos de un arreglo con 'for in':
Pero para eso es mejor utilizar 'for of'.
*/

let animales = ['Perro', 'Caballo', 'Gato']
for (let indice in animales){
    console.log(indice, animales[indice]);
}