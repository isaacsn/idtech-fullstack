function diceRoll(maxInt) {
    let randomNumber = Math.floor(Math.random() * maxInt);
    return("Rolling the Dice!" + "\n" + randomNumber)
}

console.log(diceRoll(13));