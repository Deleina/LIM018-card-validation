import validator from './validator.js';
//referencia a elementos HTML
let creditCardNumber = document.getElementById('inputNumber');
let form = document.getElementById('formElement')
let mensajeDeResultdo = document.getElementById('mensaje-de-resultado')

let valorInput ="";

//Evento submit, preventDefault, para que el form no carge por defecto 
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const mensaje = [];
    let result = validator.isValid(valorInput);
    if (result===true) {
        mensaje.push('la tarjeta es valida')
    }else{
        mensaje.push('la tarjeta es invalida')
    }

    //agregando el mensaje al html 
    mensajeDeResultdo.innerHTML=mensaje.join(',')
})


//evento focus se dispara cuando se activa el control o toma foco.
// el evento blur se dispara cuando pierde el foco el control.

creditCardNumber.addEventListener('blur', ()=> {
    valorInput=creditCardNumber.value;
    let resultadoMaskify=validator.maskify(valorInput);
    creditCardNumber.value=resultadoMaskify;
})


creditCardNumber.addEventListener('focus', ()=>{
    creditCardNumber.value= "";
    valorInput=""
})
