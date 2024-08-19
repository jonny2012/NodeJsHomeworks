

let arr1 = [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16] // 26
let arr2 = [26, 0, 75, 87, 33, 52, 37, 59, 27, 4, 54, 15, 24, 7, 21, 82, 98, 79, 34, 25, 1, 99, 5, 10, 96, 97, 65, 85, 47, 28, 81, 70, 74, 11, 38, 45, 84, 13, 41, 2, 86, 39, 29, 43, 19, 31, 18, 58, 14, 77, 69, 32, 6, 66, 61, 62, 50, 53, 8, 80, 72, 9, 68, 35, 42, 73, 83, 71, 92, 95, 63, 51, 16, 17, 64, 22, 44, 91, 30, 76, 12, 3, 46, 60, 36, 56, 88, 89, 100, 78, 90, 49, 55, 48, 23, 93, 57, 67, 20, 94] // 40
let arr3 = [15, 60, 61, 95, 46, 38, 68, 11, 47, 45, 27, 23, 3, 16, 8, 81, 76, 63, 62, 57, 59, 22, 55, 78, 28, 54, 74, 39, 79, 65, 48, 82, 17, 2, 98, 90, 18, 9, 56, 34, 7, 75, 10, 93, 35, 5, 73, 77, 85, 71, 13, 91, 83, 70, 89, 4, 84, 14, 52, 99, 53, 33, 49, 42, 40, 58, 30, 36, 67, 72, 41, 26, 87, 97, 25, 29, 50, 64, 21, 88, 66, 24, 94, 51, 1, 100, 0, 96, 69, 12, 92, 31, 37, 6, 86, 32, 19, 44, 20, 43] // 80

const FindNumber = (arr)=>{

    let  num = 0
    let sorted = arr.sort((a,b)=> a-b)
    console.log(sorted)
    for(let i = 0; i<sorted.length; i++){

        if(i === sorted[i] ){
            num = i+1
        }
    }
    return num

}

// console.log(FindNumber(arr3))



// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

const count=(str)=>{

    let arr = str.split("")
    const obj = {}

    for(let i=0; i< arr.length; i++){
        if(typeof obj[arr[i]] !== "undefined"){
            obj[arr[i]] +=1
        }
        else obj[arr[i]] = 1
    }
    return obj
} 
// console.log(count("ananas"))



// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
  function persistence(num) {
    let count = 0
    num = num.toString()
    while (num.length > 1) {
        count++
        num = num.split("").map(Number).reduce((a, b) => a * b).toString()
    }
    return count
}


function fakeBin(x){
    newy = x.split(/[0-4]/g).join("0").split(/[5-9]/).join("1")

   }

// console.log(fakeBin("45385593107843568"))



const XO = (str) => {
  
    let os = 0
    let xs = 0
    
    for(let i = 0; i< str.length; i++){
      
      if(str[i].toLowerCase() ==="o"){
        os++

      }
     else if(str[i].toLowerCase() ==="x"){
        xs++
      }
    }
    if(os === xs) return true
    else return false
      
  }
//   console.log(XO("xxoo"))


function bingo(ticket, win) {
  let charcodes = []
  let count = 0
  for (let i = 0; i < ticket[win-1][0].length; i++) {
      charcodes.push( ticket[win-1][0].charCodeAt(i))
      console.log(ticket[win-1][0])
  }
  if(charcodes.includes(ticket[win-1][1])) {
      return "Winner!"
    }
    else return "Loser!"
  
}
console.log(bingo([['ZT',85], ['HAYJHS',71], ['ZMDRQM',90], ['HWHQYKQE',65], ['JUYLE',68], ['XHBY',72], ['DESLU',71], ['QB',67]], 6))