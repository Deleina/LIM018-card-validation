
const validator = {
  isValid: function (cardNumber) {
    const number =cardNumber.value.split("").reverse();
    console.log(number)
  }
};


export default validator;
