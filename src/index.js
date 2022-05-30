import validator from './validator.js';

let creditCardNumber = document.getElementById('inputNumber');
let form = document.getElementById('formElement')
//let date = document.getElementById('date')
//let name = document.getElementById('name')
//let cvv = document.getElementById('cvv')
let mensajeDeResultdo = document.getElementById('mensaje-de-resultado')
//let btn = document.getElementById('btn')
//console.log(btn)
let valorInput ="";

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const mensaje = [];
    let result = validator.isValid(valorInput);
    if (result===true) {
        //alert('la tarjeta es valida')
        mensaje.push('la tarjeta es valida')
    }else{
        //alert('la tarjeta es invalida')
        mensaje.push('la tarjeta es invalida')
    }

    mensajeDeResultdo.innerHTML=mensaje.join(',')


    //return false;
})

creditCardNumber.addEventListener('blur', ()=> {
    valorInput=creditCardNumber.value;
    let resultadoMaskify=validator.maskify(valorInput);
    creditCardNumber.value=resultadoMaskify;
})

creditCardNumber.addEventListener('focus', ()=>{
    creditCardNumber.value= "";
    valorInput=""
})
