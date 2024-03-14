/*
Las factory functions nos permiten crear objetos de una manera sencilla y no repetitiva 
para la creacion y manejo de multiples objetos.
Las factory functions se escriben en la convension de camelCase.
- las funciones que se asignan a los objetos se les conoce como 'metodos'.
*/

function crearUsuario(nombre, email) {
    return {
        email,
        nombre,
        activo: true,
        intClave: function () {
            console.log('Ingresar Clave');
        },
    };
}

let user1 = crearUsuario('Carlos', 'carlos@gmail.com');
let user2 = crearUsuario('Alex', 'alex@gmail.com');
let user3 = crearUsuario('Juan', 'juan@gmail.com');

console.log(user1, user2, user3);