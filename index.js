function writeCards(gifts,eventName){
  let arr = []
  for (let i = 0; i < gifts.length; i++){
    arr.push(`Thank you, ${gifts[i]}, for the wonderful ${eventName} gift!`)
  }
return arr
}

function countdown(num){

   while (num >= 0){
     console.log(num)
     num--
   }
   }
