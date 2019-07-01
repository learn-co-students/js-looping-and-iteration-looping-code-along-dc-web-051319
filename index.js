function writeCards (names, event) {
    let cards = [];

    const events = {
      birthday: "for the wonderful birthday gift!",
      surprise: "for the wonderful surprise gift!"
    }

    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, ${events[event]}`);
    }
    return cards;
};

function countdown(integer) {
    while (integer >= 0) {
      console.log(integer)
      integer--;
    }
  }
  
