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