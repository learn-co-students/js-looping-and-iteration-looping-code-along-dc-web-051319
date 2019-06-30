// Code your solutions in this file

// In `index.js`, build a function named `writeCards()` that accepts two arguments:
// an array of string names, and an event name. Create a `for` loop with a counter
// that starts at `0` and increments at the end of each loop. The condition should
// halt the `for` loop after the last name in the array is printed out in the loop
// body.  "Thank you, Ada, for the wonderful birthday gift.",

function writeCards(array, event){

	let customMessages = [] 

	for(var i = 0; i<array.length; i++){

		customMessages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)

	}

	return customMessages

}


function countdown(int){

	let i = int 

	while(i>0){

		console.log(i)

		i-=1

	}

	console.log(i)

}