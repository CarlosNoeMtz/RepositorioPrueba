/*
Las funciones constructoras se escriben en la convension de UpperCamelCase.
- las funciones que se asignan a los objetos se les conoce como 'metodos'.
*/

function Usuario() {
    this.id = 1;
    this.recuperarClave = function(){
        console.log('Recuperando clave..')
    }
}

let usuario = new Usuario;
console.log(usuario);