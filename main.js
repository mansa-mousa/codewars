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
  
// Return a new array with the strings filtered out
function filter_list(l) {
    let integer = []
    l.forEach((x)=>{
      if(typeof x === 'number'){
        integer.push(x)
      }
    })
    return integer
  }

  // Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
  function toTime(seconds) {

    let hours = Math.floor(seconds/3600)
    let minutes = Math.floor(((seconds/3600) - hours) * 60)
    return `${hours} hour(s) and ${minutes} minute(s)`
  
  }