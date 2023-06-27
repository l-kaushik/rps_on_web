function getComputerChoice() {
    let selectionIndex = Math.floor(Math.random() * 3);

    if (selectionIndex == 0) {
        return "Rock";
    }
    else if (selectionIndex == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return `Both choose ${playerSelection}, so its a tie`;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")) {
        playerScore += 1;
        return `${playerSelection} beats ${computerSelection} and player got a point`;
    }
    else {
        computerScore += 1;
        return `${computerSelection} beats ${playerSelection} and computer got a point`;
    }
}

function game(playerResponse) {
        
        return (playRound(playerResponse, getComputerChoice()));
        

}

// Main game program starts from here

var playerScore = 0, computerScore = 0;

// game();





const round = document.querySelector(".round");
const buttons = document.querySelectorAll(".btn");
const gameStatus = document.querySelector(".gameStatus");
let round_number = 1

buttons.forEach((button) =>{
    button.addEventListener("click", handleButtonClick);
});


function handleButtonClick(e){

    gameStatus.textContent = "playing...";
    round.textContent = `round ${round_number}`
    console.log(game(e.target.textContent)); 
    round_number++;

    if (round_number == 6){
        gameStatus.textContent = "finished";
        displayMessage("you have finished the game, click restart to play again");
        buttons.forEach((button) => {
            button.removeEventListener("click", handleButtonClick);
        });

        if (computerScore == playerScore) {
            console.log(`both got same points ${computerScore}`);
        }
        else if (playerScore > computerScore) {
            console.log(`Player wins by ${playerScore - computerScore}`);
        }
        else {
            console.log(`Computer wins by ${computerScore - playerScore}`);
        }
    }

}



function displayMessage(message){
    const messageElement = document.createElement("div");
    const restartButton = document.createElement("button");
    restartButton.textContent = "restart";
    messageElement.textContent = message;

    document.body.appendChild(restartButton)    
    document.body.appendChild(messageElement);
}