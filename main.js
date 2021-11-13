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
    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor ='green';
    //set message
    setMessage(`${winningNum} is correct, YOU WIN!!!`, 'green')
} else {
    //wrong number 
    guessesLeft -= 1;

    if(guessesLeft === 0){
        //game over -lost
        //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor ='red';
    //set message
    setMessage(`Game over, you lost, The correct answer was ${winningNum}`, 'red');

    } else {
        // game continues - wrong answer
        setM
    }

}

//set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

});
