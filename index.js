// Code your solutions in this file
let arr = [];

function writeCards(array, event) {
for (let i = 0; i < array.length ;i++ ) {
arr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
}
return arr
}

function countdown(int) {

  while (int >= 0 ) {
    console.log(int)
    int--
  }
}
