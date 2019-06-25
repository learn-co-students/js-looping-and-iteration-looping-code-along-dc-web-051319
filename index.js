// Code your solutions in this file
function writeCards(names, event) {
    let thankArr = []
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        thankArr.push(message)
    }
    return thankArr
}

function countdown(int) {
    let count = int 

    while (count >= 0) {
        console.log(count--)
    }

}