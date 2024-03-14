/*
- Cuando se declara una variable con la palabra reservada 'cons' no se puede
cambiar su valor, pero si se le asigna un objeto si se puede cambiar las propiedades
del objeto.
- Pero si se puede agregar propiedades al objeto.
- Para eliminar propiedades se utiliza la palabra reservada 'delete'.
- No podemos hacer que deje de ser un objeto. 
*/

const usuario = { id: 1 };

usuario.name = 'Carlos';
usuario.guardar = function (){
    console.log('Guardando', usuario.name);
}

usuario.guardar();

delete usuario.name;
delete usuario.guardar;
console.log(usuario);

/*
- Para hacer que un objeto no se puedan modificar sus propiedades se utiliza 'freeze'.
- Si queremos hacer que si se puedan modificar sus propiedades, pero que no se puedan agregar mas
propiedades se utiliza la palabra 'seal'.
*/

const user2 = Object.freeze ({id: 1 });
user2.name = 'Carlos';
user2.id = 2;
console.log(user2);

const user3 = Object.seal ({id: 1});
user3.name = 'Carlos';
user3.id = 2;
console.log(user3);