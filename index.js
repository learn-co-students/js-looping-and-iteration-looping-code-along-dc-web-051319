function writeCards(array) {
    let cards = []
    for (let i = 0; i < array.length ; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return cards;
}

function countdown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}
