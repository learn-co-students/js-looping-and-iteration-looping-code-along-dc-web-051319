// Code your solutions in this file
let writeCards = (names, event) => {
  let thankYouCards = []
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}

function countdown(int) {
  while (int >= 0) {
    console.log(int)
    int--
  }
}