// Code your solutions in this file
function countdown(input){
    // let var = 0;
    console.log(input)
    while (input > 0) {
    console.log(input-=1);
    }
}
function writeCards(input){
   let newArray = []
    for (let i = 0; i < input.length; i++) {
        newArray.push(`Thank you, ${input[i]}, for the wonderful surprise gift!`)
    }
    return newArray
}