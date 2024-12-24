let=random_number=parseInt(Math.random() * 100 +1);//will not give zero so we will add 1

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playgame=true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateguess(guess);
    });


}

function validateguess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter a number greater than 0')

    }
    else if(guess>100){
        alert('please enter a number less than 100')
    }   
    else{
        prevGuess.push(guess)
        if(numGuess==11){
            displayGuess(guess)
            displaymessage(`Game Over. Random number was ${random_number}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }


}
function checkGuess(guess){
    if(guess==random_number){

        displaymessage(`You guessed it right`)

}

else if(guess<random_number){
    displaymessage('Toooo low')
}
else if(guess>random_number){
    displaymessage(`Toooo high`)

}
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`


}
function displaymessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`


}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">Start new game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame();

}
function newGame(){
    const newGamebutton=document.querySelector('#newgame')
    newGamebutton.addEventListener('click',function(e){
        random_number=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        startOver.removeChild(p)
        playgame=true;

        

})
}
