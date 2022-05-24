//objeto
const validator = {
  isValid:function cardNumber(creditCardNumber) {
    //variable que guarda el valor de creditCardNumber
    const creditcard = creditCardNumber.split("");

    //array que guarda resultados 
    let arrayN= [];

    //iterando creditcard y guardadndo en una variable llamada valor 
    for (let i = 0; i < creditcard.length;  i++) {
        let valor = creditcard[i];
        //variable que guardara multiplicacion  
        let valorMultiplicado =0;

      if (i===0){
          valorMultiplicado=valor * 2;   
      } else if (i % 2 === 0){
          valorMultiplicado=valor* 2;  
      }else{
          valorMultiplicado=valor * 1 //numeros impar
      }

      //variable que almacena resultados de lamultplicacion,se convierte en string
      let stringMultiplicado= valorMultiplicado.toString();

      //longitud de variable strinngMultiplicado es mayor >1  se localiza el primer y segundo indice *1 y se suma las variables en la que se guarda
      if (stringMultiplicado.length > 1) {
          const digit1 =stringMultiplicado.charAt(0)*1;
          const digit2 = stringMultiplicado.charAt(1)*1;
          const resultDigit= digit1+digit2;
        
          //se agrega al arrayN
          arrayN.push(resultDigit)
      }else{
        //los que no cumplen tambien se agregan 
        arrayN.push(Number(stringMultiplicado));
      //arrayN.push(valorS)
      }
  }

  //suma total del array , metodo reduce() con dos parametros count, item. 0 es indicar por donde se empieza.
  const sumaTotal=arrayN.reduce((count, item)=> count + item, 0);

    let sumaString = sumaTotal.toString();
    console.log(sumaTotal);
    if (sumaString.charAt(sumaString.length - 1) === '0') {
      return true;
    } else{
      return false;
    }
  }    
}

export default validator;
