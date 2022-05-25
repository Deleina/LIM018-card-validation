import validator from './validator.js';

let creditCardNumber = document.getElementById('inputNumber');
//let date = document.getElementById('date')
//let nameUser = document.getElementById('name')
//let cvv = document.getElementById('cvv')
let btn = document.getElementById('btn')
//console.log(btn)
let valorInput ="";
btn.addEventListener('click', ()=> {
    let result = validator.isValid(valorInput);
    if (result===true) {
        alert('la tarjeta es valida')
    }else{
        alert('la tarjeta es invalida')
    }
})

creditCardNumber.addEventListener('blur', ()=> {
    valorInput=creditCardNumber.value;
    let resultadoMaskify=validator.maskify(valorInput);
    creditCardNumber.value=resultadoMaskify;
    console.log(resultadoMaskify)
})

creditCardNumber.addEventListener('focus', ()=>{
    creditCardNumber.value= "";
})


