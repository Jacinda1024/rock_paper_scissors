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
        return 'The game is a tie.'
    }
    else if (
        (getUserChoice === 'rock' && getComputerChoice === 'scissors') ||
        (getUserChoice === 'scissors' && getComputerChoice === 'paper') ||
        (getUserChoice === 'paper' && getComputerChoice === 'rock')
    ) {
        return 'You win!'
    } 
    else {
        return 'You lost!'
    }
}

const playRound = (input) => {
	let userChoice = getUserChoice(input);
    let computerChoice = getComputerChoice();
  if(userChoice === 'Error'){
    return 'Error: Invalid selection. Choose rock, paper, or scissors'
  }else{
  	return 'You chose ' + userChoice + '.' + '\n' +
    'The computer chose ' + computerChoice + '.' + '\n' +
    determineWinner (userChoice, computerChoice)
  }
};

console.log (playRound())