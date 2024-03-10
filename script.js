



const cpuRecord = []; //this array append 1 for every round won by CPU 
const playerRecord = []; //this array append 1 for every round won by player  
const max = 3;
let cpuScore = 0;
let playerScore = 0 ;
let winner = '';


a = function getComputerChoice () {

    const choices = ["Rock", "Paper","Scissors"];
    let randomNumber = Math.floor(Math.random()* max);
    let computerChoice = choices[randomNumber];

    return computerChoice;
}
function rpsRound (playerChoice, compChoice){

    if (playerChoice === compChoice) {
        let result = "This is a draw";
        console.log(compChoice);
        console.log(playerChoice);
        winner = "None";

    }

    else if (playerChoice == "Rock" && compChoice == "Paper" ){
        winner = "CPU";
        cpuScore = cpuScore + 1;
   }
    else if (playerChoice == "Scissors" && compChoice == "Rock" ){
        winner = "CPU"
        cpuScore = cpuScore + 1;
    }
    else if (playerChoice == "Paper" && compChoice == "Scissors"){
        winner = "CPU"
        cpuScore = cpuScore + 1;
    }

    else {
        winner = "Player 1";
        playerScore = playerScore + 1;
    }
}


let compChoice = a(); //let's not forget to 
start.addEventListener('click', () => {
    const container = document.getElementById("appender");

    const  scorePlayer1 = document.createElement("p");
    const  scoreCpu = document.createElement("p");
    scorePlayer1.setAttribute("id","leftScore");
    scoreCpu.setAttribute("id","leftScore");

    


    const playerDiv = document.getElementById("playerSection");
    const cpuDiv = document.getElementById("cpuSection");
    playerDiv.textContent = " Player1   ";
    cpuDiv.textContent = " CPU  ";

    const playButton = document.getElementById("start");
    playButton.style.display = "none";

    const roundDiv = document.createElement('div');
    const roundIndicator = document.createElement('p');
    roundDiv.setAttribute("id","theone");

    const winnerPresentation = document.createElement("p");
    winnerPresentation.setAttribute("id","thewinner");
    
     
    const choicesDiv = document.createElement('div');
    choicesDiv.setAttribute("id","test-id");
    const playerChoicesIndicator = document.createElement('p');
    const cpuChoicesIndicator = document.createElement('p');

    roundIndicator.textContent = `Round : ${"round"}`;//The variable round needs 
    roundIndicator.setAttribute("id","round-number");
    playerChoicesIndicator.setAttribute("class","ChoiceIndicator");
    cpuChoicesIndicator.setAttribute("class","ChoiceIndicator");

    container.appendChild(roundDiv);
    roundDiv.appendChild(roundIndicator);
    roundDiv.appendChild(choicesDiv);
    roundDiv.appendChild(winnerPresentation);
    choicesDiv.appendChild(playerChoicesIndicator);
    choicesDiv.appendChild(cpuChoicesIndicator);
    playerDiv.appendChild(scorePlayer1);
    cpuDiv.appendChild(scoreCpu);

    //for loop that will implement the game logic

    for (i=1; i<2; i++){
        console.log(i);
        let round = i;
        //roundIndicator.textContent = `Round : ${round}`;
        roundIndicator.textContent = "Let the challenge begin! Your choice?";

        
        rock.addEventListener('click', () => {
            playerChoice = "Rock";
            rpsRound( playerChoice, compChoice);
            playerChoicesIndicator.textContent = `Player1 choses: ${playerChoice}`;
            cpuChoicesIndicator.textContent = `CPU choses: ${compChoice}`;
            winnerPresentation.textContent = `Winner: ${winner}`;
            scoreCpu.textContent = `${cpuScore}`;
            scorePlayer1.textContent = `${playerScore}`;
            });
        
        paper.addEventListener('click', () => {
            playerChoice = "Paper";
            rpsRound(playerChoice, compChoice);
            playerChoicesIndicator.textContent = `Player1 choses: ${playerChoice}`;
            cpuChoicesIndicator.textContent = `CPU choses: ${compChoice}`;
            winnerPresentation.textContent = `Winner: ${winner}`;
            scoreCpu.textContent = `${cpuScore}`;
            scorePlayer1.textContent = `${playerScore}`;
            });

        scissors.addEventListener('click', () => {
            playerChoice = "Scissors";
            rpsRound(playerChoice, compChoice);
            playerChoicesIndicator.textContent = `Player1 choses: ${playerChoice}`;
            cpuChoicesIndicator.textContent = `CPU choses: ${compChoice}`;
            winnerPresentation.textContent = `Winner: ${winner}`;
            scoreCpu.textContent = `${cpuScore}`;
            scorePlayer1.textContent = `${playerScore}`;  
            
            }); 
    }
});


