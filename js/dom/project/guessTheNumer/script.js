const { createElement } = require("react")

const userInput=Input=document.getElementById('guessField')
const submit=document.getElementById('subt')
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const randomNumber=parseInt(Math.random() * 100 + 1)
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p');
const prevGuess=[];
const numbGuess=1;
let playGame=true;

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`please enter a valid number`)
    }else if(guess < 1){
        alert(`please enter a number more than 1`)
    }else if (guess > 100){
        alert(`please enter a number less than 100`)
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`game is over. Random number was ${randomNumber}`)
            endGame();  
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`you guessed it right`)
    }else if(guess<randomNumber){
        displayMessage(`the number is too low`)
    }else if(guess>randomNumber){
        displayMessage(`the number is too high`)
    }
}
function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}  ;`
    numbGuess++;
    remaining=`remaining guesses are ${11-numbGuess}`
}
function displayMessage(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`
}