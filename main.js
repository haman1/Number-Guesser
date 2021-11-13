//Game  values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


//Assign Ui min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

// validate 
if(isNaN(guess)|| guess < min || guess > max) {
    setMessage('please enter a number between ${min} and ${max}', 'red');
}

//check if won
if (guess === winningNum){
    //Game over won
    gameOver(true, `${winningNum} is correct, YOU WIN!!!`);

} else {
    //wrong number 
    guessesLeft -= 1;

    if(guessesLeft === 0){
        //game over -lost
        //disable input
        gameOver(false, `Game over, you lost, The correct answer was ${winningNum}`);
        
    } else {
        // change border color
        guessInput.style.borderColor = 'red';
        // clear input
        guessInput.value = '';
        // game continues - wrong answer
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)
    }

}
//game over 
function gameOver(won, msg){
    let color;
    won === true ? color = 'green'  : color = 'red';
    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    message.style.color = color;
    //set message
    setMessage(msg);

}
//set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

});
