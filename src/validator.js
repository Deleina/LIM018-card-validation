//objeto
const validator = {
  isValid:function(creditCardNumber) {
    //variable que guarda el valor de creditCardNumber
    const creditcard = creditCardNumber.split("").reverse();

    //array que guarda resultados 
    let arrayN= [];

    //iterando creditcard y guardando en una variable llamada valor 
    for (let i = 0; i < creditcard.length;  i++) {
        let valor = creditcard[i];
        console.log()
        //variable que guardara multiplicacion  
        let valorMultiplicado =0;
      if (i===0){
         valorMultiplicado=valor *1;   
      } else if (i%2 === 1){
          valorMultiplicado=valor* 2;  
      }else{
          valorMultiplicado=valor * 1;
      }

      //
      let stringMultiplicado= valorMultiplicado.toString();

      //si la longitud de variable strinngMultiplicado es mayor >1  se localiza el primer 
      //y segundo indice *1 y se suma las variables en la que se guarda
      if (stringMultiplicado.length > 1) {
          const digit1 =stringMultiplicado.charAt(0)*1;
          const digit2 = stringMultiplicado.charAt(1)*1;
          const resultDigit= digit1+digit2;
          //se agrega al arrayN
          arrayN.push(resultDigit)
      }else{
        arrayN.push(Number(stringMultiplicado)); 
      }
  }

  //suma total del array , metodo reduce() con dos parametros count, 
  //item. 0 es indicar por donde se empieza.
  const sumaTotal=arrayN.reduce((count, item)=> count + item, 0);

    let sumaString = sumaTotal.toString();

    if (sumaString.charAt(sumaString.length - 1) === '0') {
      return true;
    } else{
      return false;
    }
  },

  //enmascarado
  maskify:function(creditCardNumber) {
    let cortarNumber=creditCardNumber.slice(-4);
    let countNum="";
    
     //la longitud de creditaCardNumber -4
    for(let i = 0; i <(creditCardNumber.length)-4; i++) {
      //se suma con #
         countNum += "#";
    }

    //retorna count +cortarNumber
    return countNum+cortarNumber
  }
}

export default validator;
