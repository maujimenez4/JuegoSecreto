function saludo() {
    console.log ("Hola mundo");
}

function nombre (nombre){
    let nombre = prompt("Me puedes indicar tu nombre");
    console.log (`Hola, ${nombre}`);
}

function numero (numero){
    let numero = prompt ("Dame un numero");
    numero = numero * 2
    console.log (`El doble del numero es ${numero}`);
}

function promedio (n1, n2, n3){
    let n1 = prompt ("Dame el primer numero");
    let n2 = prompt ("Dame el segundo numero");
    let n3 = prompt ("Dame el tercer numero");
    let promedio= n1+n2+n3/3;
    console.log (`EL promedio de los numeros es: ${promedio}`);
}

function mayor (n1, n2){
    let n1 = prompt ("Dame un numero");
    let n2 = prompt ("Dame otro numero");
    if (n1 > n2){
        console.log (`El numero mayor es: ${n1}`);
    }else if (n2 > n1){
        console.log (`El numero mayor es: ${n2}`);
    }
    else{
        console.log (`Los numeros son iguales`);
    }
}

function cuadrado (num){
    let num = prompt ("Dame un numero para saber su potencia");
    console.log (`El cuadrado de ese numero es: ${num*num}`);
}