// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
function pipeFix(numbers){
    let firstNum = numbers[0]
    let lastNum = numbers[numbers.length-1]
    let arr = []
    for(let i = firstNum; i <= lastNum; i++){
      arr.push(i)
    }
    return arr
  }

//   Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && currentDate >= expirationDate
  }
  