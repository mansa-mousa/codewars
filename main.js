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

  // Convert a String to a Number!
  let stringToNumber = function(str){
    return Number(str)
  }

  // Remove First and Last Character
  function removeChar(str){
    return str.slice(1,str.length-1)
   
   }

  //  Friend or Foe?
  function friend(friends){
    let realFriends = []
    friends.forEach((x)=>{
      if(x.length == 4){
        realFriends.push(x)
      }
    })
    return realFriends
  }

  // String ends with?
  function solution(str, ending){
    return str.endsWith(ending)
   }
   
  //  Sum of all the multiples of 3 or 5
  function findSum(n) {
    let sum = 0
    for(let i = 0; i <= n; i++){
      if((i % 3 == 0) || (i % 5 == 0)){
        sum += i
    }
    }
   return sum
  }

  // Get the Middle Character
  function getMiddle(s)
{
return  s.length % 2 == 0 ? s.charAt((s.length/2)-1)+(s.charAt(s.length/2)) : s.charAt(s.length/2)
}

// Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi,'')
}

// Find the next perfect square!
function findNextSquare(sq) {
  if(Number.isInteger(Math.pow(Math.sqrt(sq)+1,2))){
    return Math.pow(Math.sqrt(sq)+1,2)
  }else{
    return -1
  }
}

// Highest and Lowest
function highAndLow(numbers){
  let compareNumbers=(a,b)=>{return a-b}
  let sorted = numbers.split(' ').sort(compareNumbers)
  let highestLowest = sorted[sorted.length-1] + " " +sorted[0]
  return highestLowest.toString()
}

// Difference of Volumes of Cuboids
function findDifference(a, b) {
  return Math.abs(a.reduce((acc,c)=> acc * c,1) - b.reduce((acc,c)=> acc * c,1))
}

// Incorrect division method
const solve = (x, y) => x/y

// Do I get a bonus?
function bonusTime(salary, bonus) {
  return (bonus == true) ? "\u00A3"+salary*10 : "\u00A3"+salary
 }

//  My head is at the wrong end!
function fixTheMeerkat(arr) {
  return arr.reverse()
 }

//  Get the mean of an array
function getAverage(marks){
  let sum = 0
  marks.forEach((x) => {
    sum += x
  })
    let mean = sum / marks.length
  return Math.floor(mean)
}

// Sum The Strings
function sumStr(a,b) {
  let sum = Number(a)+Number(b)
  return sum.toString()
}

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(((a,b)=>a-b)) 
   return numbers[0]+numbers[1]
}

// Descending Order
function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''))
}

// Keep Hydrated!
function litres(time) {
  return Math.floor(time/2)
}

// Opposite number
function opposite(number) {
  number = number *(-1)
  return number
}

// You're a square!
let isSquare = function(n){
  if(Math.sqrt(n) % 1 === 0){
  return true}else{
  return false}
}

// Remove String Spaces
function noSpace(x){
  return x.split(" ").join("")
 }

//  Is he gonna survive?
function hero(bullets, dragons){
  if(bullets >= dragons*2){
    return true
  }else{
return false}
}

// Vowel Count
function getCount(str) {
  var vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str){
    if(vowels.includes(char)){
      vowelsCount++
    }
  }
  return vowelsCount;
}

// Convert a Number to a String!
function numberToString(num) {
  return num.toString()
}

// Reversed Strings
function solution(str){
  return str.split('').reverse().join('')
}

// Even or Odd
function even_or_odd(number) {
  if(Number(number) % 2 === 0){
    return "Even"
  }else{
    return "Odd"
  }
}

// Multiply
function multiply(a, b){
  return a * b
 }
 
//  Filter Long Words
 function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(x => x.length > n)
}

// Square Every Digit
function squareDigits(num){
  let concat = ''
  num.toString().split('').forEach((x) => {
    concat += x*x
    
  })
  return Number(concat)
}

// Reverse words
function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

// Filter
function getEvenNumbers(numbersArray){
  let result = numbersArray.filter(numbersArray => 
    numbersArray % 2 == 0
  )
  return result
}

// Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}

// A Strange Trip to the Market
function isLockNessMonster(s) {
  return s.includes("tree fiddy", "3.50", "three fifty")
}

// You only need one
function check(a, x) {
  return a.includes(x) ? true : false
}

Sort and Star
function twoSort(s) {
  return s.sort()[0].split('').join('***')
}

// Fake Binary
function fakeBin(x){
  return x.replace(/[1-4]/g, 0).replace(/[5-9]/g, 1)
 }

//  The Feast of Many Beasts
 function feast(beast, dish) {
  beast.split('')
  dish.split('')
  return (beast[0] === dish[0]) && (beast[beast.length-1] === dish[dish.length-1]) ? true : false
}

// Alan Partridge II - Apple Turnover
function apple(x){
  return x*x >= 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}

// Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// Abbreviate a Two Word Name
function abbrevName(name){
  return name.match(/[A-Z]/g).join('.')
}

// The Wide-Mouthed frog!
function mouthSize(animal) {
  if(animal == 'alligator' || animal == 'ALLIGATOR'){
    return 'small'
  }else{
    return 'wide'
  }
}

// Template Strings
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}

// Sum of positive
function positiveSum(arr) {
  let sum = 0
  arr.forEach((x) => {
    if(x > 0){
      sum += x
    }
  })
  return sum
}