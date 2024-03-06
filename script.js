




const max = 3;

a = function getComputerChoice () {

    const choices = ["Rock", "Paper","Scissors"];
    let randomNumber = Math.floor(Math.random()* max);
    let computerChoice = choices[randomNumber];

    return computerChoice;
}

/* b = function playerSelection () {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();     //request user input and lowecase everything
    let formattedPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1); //upper case the first letter
    
    return formattedPlayerChoice;
}
*/


function rpsRound (playerChoice, compChoice){
    //compChoice = a();
   // playerChoice = b();

    if (playerChoice === compChoice) {
        let result = "This is a draw";
        console.log(compChoice);
        console.log(playerChoice);
        alert(result);
    }

    else if (playerChoice == "Rock" && compChoice == "Paper" ){
        let result = "You Lose! Paper beats Rock";
        console.log(compChoice);
        console.log(playerChoice);
        alert(result);
   }
    else if (playerChoice == "Scissors" && compChoice == "Rock" ){
        let result = "You Lose! Rock beats Scissors";
        console.log(compChoice);
        console.log(playerChoice);
        alert(result);
    }
    else if (playerChoice == "Paper" && compChoice == "Scissors"){
        let result = "You lose! Scissors beats Paper";
        console.log(compChoice);
        console.log(playerChoice);
        alert(result);
    }

    else {
        let result = `You Win! ${playerChoice} beats ${compChoice}`;
        console.log(compChoice);
        console.log(playerChoice);
        alert(result);
    }
}

//console.log(rpsRound());



let compChoice = a();
start.addEventListener('click', () => {
    compChoice;
    
});


rock.addEventListener('click', () => {
    playerChoice = "Rock";
    rpsRound( playerChoice, compChoice);
});

paper.addEventListener('click', () => {
    playerChoice = "Paper";
    rpsRound(playerChoice, compChoice);
});

scissors.addEventListener('click', () => {
    playerChoice = "Scissors";
    rpsRound(playerChoice, compChoice);
});