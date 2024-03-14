// Jugador de Futbol
let nombre = "Neymar Jr";
let equipo = "Barcelona";
let edad = 25;

/* 
Todos los datos que se encuentran dentro de las llaves pertenecen a un objeto.
Por lo que deben contener datos que sean de dicho objeto
*/
let jugador = {
    nombre: "Neymar Jr",
    equipo: "Barcelona",
    edad: 25,
};

console.log(jugador);
/*
JavaScript no garantiza el orden de las propiedades de los objetos.
Para acceder a una propiedad en especifico se usa:
*/
console.log(jugador.equipo);
console.log(jugador["nombre"]);

/*
Para modificar el valor de las propiedades:
*/
jugador.edad = 22;
console.log(jugador.edad);

jugador["equipo"] = "Santos FC";
console.log(jugador.equipo);

/*
Para eliminar las propiedades de los objetos:
*/
delete jugador.nombre;
console.log(jugador);