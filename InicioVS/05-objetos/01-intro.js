/*
Los objetos se utilizan para agrupar datos dentro de un mismo objeto, 
para que sea mas facil trabajar con ellos.
- Se pueden colocar objetos dentro de objetos.
- Se pueden asignar propiedades que tengan un valor de 'boolean'.
- Se pueden agregar funciones sin nombre 'Funciones Anonimas' para evitar redundancias en el codigo.
*/

let user = {
    email: 'carlosnmrtnz@gmail.com',
    nombre: 'Carlos',
    direccion: {
        calle: 'Venustiano Carranza',
        numero: '102',
    },
    activo: true,
    intClave: function () {
        console.log('Ingresar Clave');
    },
};