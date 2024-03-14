/* Si el operador 'Else' tendra multiples expresiones debemos colocar {}.
Todo lo que se encuentra dentro de los parentesis se le llama 'Bloque de codigo'.
*/

let edad = 16;
if (edad > 18){
    console.log('Usuario mayor edad');
} else {
    console.log('Usuario menor edad');
}

let edad2 = 17;
if (edad2 > 18){
    console.log('Usuario mayor edad');
} else if (edad2 > 13){
    console.log('Usuario necesita permiso de sus padres');
}else {
    console.log('No puede ingresar');
}