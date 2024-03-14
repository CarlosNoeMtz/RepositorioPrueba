/*
Esta nos sirve para indicarle al codigo explicitamente por donde se valla,
dependiendo el valor que tiene una variable.
Siempre que se redacte 'case' debemos colocar 'break'.
*/

let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Accion de listar');
        break;
    case 'guardar':
        console.log('Accion de guardar');
        break;
}

/* La instruccion 'default' se ejecuta siempre y cuando no exista ningun 'case',
 al que la variable pueda corresponder.
 */

let accion3 = 'actualizar';

switch (accion3) {
    case 'listar':
        console.log('Accion de listar');
        break;
    case 'guardar':
        console.log('Accion de guardar');
        break;
    default:
        console.log('Accion no reconocida');
}