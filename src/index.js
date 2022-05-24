import validator from './validator.js';

let creditCardNumber = document.getElementById('inputNumber');
//let date = document.getElementById('date')
//let nameUser = document.getElementById('name')
//let cvv = document.getElementById('cvv')
let btn = document.getElementById('btn')
//console.log(btn)

btn.addEventListener('click', ()=> {
    let result = validator.isValid(creditCardNumber.value);
    if (result===true) {
        alert('la tarjeta es valida')
    }else{
        alert('la tarjeta es invalida')
    }
})


