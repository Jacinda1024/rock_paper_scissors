// get computers choice
function getComputerChoice (){
    let randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber){
        case 0:
            return 'rock'
        case 1:
            return 'scissors'
        case 2:
            return 'paper'
        default:
            return 'Select a valid option'
    }
}

//get users choice and make case insensitive
const getUserChoice = (userInput) => {
    userInput = prompt('Pick your poison. Choose rock, paper, or scissors').toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput
    } else {
        return 'Error'
    }
}

//compare two results and determine winner
const determineWinner = (getUserChoice, getComputerChoice) => {
    if (getUserChoice === getComputerChoice) {
        draws++
        return 'The game is a tie.'
    }
    else if (
        (getUserChoice === 'rock' && getComputerChoice === 'scissors') ||
        (getUserChoice === 'scissors' && getComputerChoice === 'paper') ||
        (getUserChoice === 'paper' && getComputerChoice === 'rock')
    ) {
        playerScore++
        return 'You win!'
    } 
    else {
        computerScore++
        return 'You lost!'
    }
}

//play one round of the game
const playRound = () => {
	let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
  if(userChoice === 'Error'){
    return 'Error: Invalid selection. Choose rock, paper, or scissors'
  }else{
  	return 'You chose ' + userChoice + '.' + '\n' +
    'The computer chose ' + computerChoice + '.' + '\n' +
    determineWinner (userChoice, computerChoice) + '\n' +
    'Player Score:'+ playerScore + ' Computer Score:' + computerScore + ' Draws:' + draws
  }
};

let playerScore = 0;
let computerScore = 0;
let draws = 0;

//play game til best 3 out of 5
function game(){
    while (playerScore < 3 && computerScore < 3){
       console.log (playRound());
    } if (playerScore == 3){
        return ('Player Won');
    } else if (computerScore == 3){
        return ('Computer Won');
    } else {
        return ('Tie Game');
    }
}
console.log (game())