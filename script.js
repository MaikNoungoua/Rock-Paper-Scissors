



const cpuRecord = []; //this array append 1 for every round won by CPU 
const playerRecord = []; //this array append 1 for every round won by player  
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

function uiLogic (){
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
}



let compChoice = a(); //let's not forget to 
start.addEventListener('click', () => {
    const container = document.getElementById("appender");
    

    const playButton = document.getElementById("start");
    playButton.style.display = "none";

    
   /* const hiddenElements = document.querySelectorAll("hidden"); 
    hiddenElements.style.display = "block"; 
    /*const hiddenElements = document.getElementsByClassName("hidden"); 
    hiddenElements.style.display = "block"; */

    const roundDiv = document.createElement('div');
    const roundIndicator = document.createElement('p');
     
    const choicesDiv = document.createElement('div');
    choicesDiv.setAttribute("id","test-id");
    const playerChoicesIndicator = document.createElement('p');
    const cpuChoicesIndicator = document.createElement('p');

    roundIndicator.textContent = `Round : ${"round"}` //The variable round needs 
    
    playerChoicesIndicator.textContent = `Player 1 choses ${"playerChoice"}`;
    cpuChoicesIndicator.textContent = `CPU choses ${"compChoice"}`;

    container.appendChild(roundDiv);
    roundDiv.appendChild(roundIndicator);
    roundDiv.appendChild(choicesDiv);
    choicesDiv.appendChild(playerChoicesIndicator);
    choicesDiv.appendChild(cpuChoicesIndicator);




     






//compChoice;

});


