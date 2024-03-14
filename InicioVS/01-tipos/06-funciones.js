/* 
Las funciones son un listado de instrucciones que se deben ejecutar.
Return permite reutilizar codigo que se encuentra dentro de las funciones.
Calcularan el valor y nos devolveran el valor para ser usado en el futuro.
*/
 function suma(){
    return 2 + 2;
 }

let resultado = suma();
 console.log(resultado);

 function resta(a){ // ----> Parametros
    return a + 2;
 }

 let resultadoResta = resta(5); //----> Argumentos
 console.log(resultadoResta);

/*
Las funciones pueden tener multiples 'Parametros' y 'Argumentos'
*/