let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Ctrl + F = Find, buscar un valor o un nombre

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //Instancia del archivo html h1 para utilizarlo en js y lo asigna a una variable; esto es un objeto
    elementoHTML.innerHTML = texto; //Utiliza el objeto y el metodo innerHTML le das un valor   
    return;
}

function verificarIntento() { //Declaracion de una funcion que es un grupo de codigo que se puede llamar desde html y abarca varias lineas de codigo
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario=== numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if (numeroUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
    intentos++;
    limpiarCaja();
    }
    return; //Aunque una funcione no regrese ningun valor, una buena practica es hacerlo
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else{
        //Si el numero generado esta en la lista

        if (listaNumerosSorteados.includes(numeroGenerado)){
            /*Recursividad es que una funcion se llame a si misma
            En este caso se llama a si misma para que lo vuelva a generar*/
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;//return con a variable que queremos retornar
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    //Generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el numero intentos
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje
    condicionesIniciales();  
    //Deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');

}

//en arrays o listas la primera posicion siempre sera la 0

condicionesIniciales();
