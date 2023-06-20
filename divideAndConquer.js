// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let strSum = 0
    let string = x.filter(el => typeof(el) === 'string')
    for (let el of string){
      strSum += +el
    }
    let numSum = 0
    let number = x.filter(el => typeof(el) === 'number')
      for (let el of number){
        numSum += +el
      }
      return numSum - strSum

  }
