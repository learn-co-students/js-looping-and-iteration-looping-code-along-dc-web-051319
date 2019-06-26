// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];
 
//wrap gifts
function wrapGift(gifts) {
  
    for (var i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    };
    return gifts
};

//write cards
function writeCards(names,type) {
    let cards = [];
    for (var i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
        console.log(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    };
    return cards;
};

//countdown
function countdown(num) {
    let i = num
    while (i >= 0) {
        console.log(i)
        i--;
    };
};


