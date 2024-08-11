// aca el juego elige un numero al azar para adivinar entre el 1 y el 100 
let numeroAlazar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0






// Esta funcion se va ejecutar cuando se haga click en el boton chequear
function chequearResultado(){
    intentos ++
    intento.textContent = intentos

    if(intentos === 5){
        mensaje.textContent = "Perdiste, el numero era: " + numeroAlazar
        intentos --
        return
    }

    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Debes ingresar un numero entre 1 y 100"
        intentos = 0
        return
    }

    if(intentos === 5 && numeroIngresado != numeroAlazar){
        mensaje.textContent = "Perdiste, el numero era: " + numeroAlazar
        intentos --
        return
    }

    else if(numeroIngresado === numeroAlazar) {
        mensaje.textContent = "Felicidades adivinaste el numero";
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true;
    }
    
    else if(numeroIngresado < numeroAlazar){
        mensaje.textContent = "Mas alto! El numero que ingresaste es Menor que el numero secreto";
        mensaje.style.color = 'blue'
    }
    
    else{
        mensaje.textContent = "Mas bajo! El numero que ingresaste es Mayor que el numero secreto";
        mensaje.style.color = 'blue'
    }

}

