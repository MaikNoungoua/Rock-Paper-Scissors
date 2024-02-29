

const max = 3;

a = function getComputerChoice () {

    const choices = ["Rock", "Paper","Scissors"];
    let randomNumber = Math.floor(Math.random()* max);
    let computerChoice = choices[randomNumber];

    return computerChoice;
}

 b = function playerSelection () {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();     //request user input and lowecase everything
    let formattedPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1); //upper case the first letter
    
    return formattedPlayerChoice;
}



function rpsRound (playerChoice, computerChoice){
    computerChoice = a();
    playerChoice = b();

    if (playerChoice === computerChoice) {
        let result = "This is a draw";
        console.log(computerChoice);
        console.log(playerChoice);
        alert(result);
    }

    if (playerChoice == "Rock" && computerChoice == "Paper" ){
        let result = "You Lose! Paper beats Rock";
        console.log(computerChoice);
        console.log(playerChoice);
        alert(result);
   }
    else if (playerChoice == "Scissors" && computerChoice == "Rock" ){
        let result = "You Lose! Rock beats Scissors";
        console.log(computerChoice);
        console.log(playerChoice);
        alert(result);
    }
    else if (playerChoice == "Paper" && computerChoice == "Scissors"){
        let result = "You lose! Scissors beats Paper";
        console.log(computerChoice);
        console.log(playerChoice);
        alert(result);
    }

    else {
        let result = `You Win! ${playerChoice} beats ${computerChoice}`;
        console.log(computerChoice);
        console.log(playerChoice);
        alert(result);
    }
}

console.log(rpsRound());
