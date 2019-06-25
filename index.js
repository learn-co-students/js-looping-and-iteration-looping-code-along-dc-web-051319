// Code your solutions in this file

function writeCards(arg1, arg2){
  let finishedCards = []
  for(let i = 0; i < arg1.length; i++){
    finishedCards.push(`Thank you, ${arg1[i]}, for the wonderful ${arg2} gift!`)
  }
  return finishedCards
}



function countdown(i){

  while (i>=0){
    console.log(i)
    i--
  }
}
