/*
El operador 'for' tambien sirve para crear loops, a diferencia de los demas
contiene todo en una sola linea.
El operador 'for' se compone de 3 expresiones 
    for (inicializacion; comparacion; terminariteracion){
    }
*/

for (let i = 2; i < 10; i++){
    if (i % 2 == 0){ 
        console.log('Numero par', i);
    }
}