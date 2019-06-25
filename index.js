// Code your solutions in this file
function writeCards(array, message){
    let thankYouArray = [];
     for(let i=0;i<array.length;i++){
        thankYouArray.push(`Thank you, ${array[i]}, for the wonderful ${message} gift!`);
    }
    return thankYouArray;
}

function countdown(number){
    while (number >= 0){
        console.log(number);
        number--;
    }
}
