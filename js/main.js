// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = " la crioux "
favDrink = favDrink.trim()
console.log(favDrink)


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let words = 'dog cat apple rat'
if(words.search('apple') !== -1 ){
    console.log(true)
}else{
    console.log(false)
}


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

document.getElementById('yell').addEventListener('click',checkWin)

function rockPaperScissors(){
    random = Math.random()
    if(random < 0.33){
        return 'rock'
    }else if(random < 0.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice){
    playerChoice = document.querySelector('#choose').value
    playerChoice = playerChoice.toLowerCase()
    botChoice = rockPaperScissors()
    if((playerChoice === 'rock' && botChoice === 'paper') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper')){
        document.querySelector('h1').innerText = ('you win')
    }else if((playerChoice === 'rock' && botChoice === 'rock') || (playerChoice === 'paper' && botChoice === 'paper') || (playerChoice === 'scissors' && botChoice === 'scissors')){
        document.querySelector('h1').innerText = ('you tied')
    }else{
        document.querySelector('h1').innerText = ('you lost')
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

// function arrChoices(arr){
//     arr.forEach(x => checkWin(x))
// }
// arrChoices(['rock','paper','scissors'])