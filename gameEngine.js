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

function handleButtonClick(e) {
    
   round.textContent = `round ${round_number}`;
    gameStatus.textContent = playRound(e.target.textContent, getComputerChoice());
    round_number++;
    pScore.textContent = `Player Score:- ${playerScore}`;
    cScore.textContent = `Computer Score:- ${computerScore}`;

    if (round_number == 6) {
        displayMessage("you have finished the game, click restart to play again");
        buttons.forEach((button) => {
            button.removeEventListener("click", handleButtonClick);
        });

        if(computerScore == playerScore) {
            gameStatus.textContent = `both got same points ${computerScore}`;
        }
        else if (playerScore > computerScore) {
            gameStatus.textContent = `Player wins by ${playerScore - computerScore}`;
        }
        else {
            gameStatus.textContent = `Computer wins by ${computerScore - playerScore}`;
        }
    }
}

function displayMessage(message) {
    const messageElement = document.createElement("div");
    const restartButton = document.createElement("button");
    restartButton.textContent = "restart";

    messageElement.textContent = message;

    document.body.appendChild(restartButton)
    restartButton.classList.add("resetBtn")
    document.body.appendChild(messageElement);

    restartGame(messageElement, restartButton);

}

function restartGame(messageElement, restartButton) {

    // if !(round) return round.
    restartButton.addEventListener("click", () => {
        // round.remove()
        round.textContent = "";
        pScore.textContent = "";
        cScore.textContent = "";
        round_number = 1;
        gameStatus.textContent = "click on button to start the game";

        buttons.forEach((button) => {
            button.addEventListener("click", handleButtonClick);
        });

        messageElement.remove();
        restartButton.remove();

    });
}


// Main game program starts from here

let playerScore = 0, computerScore = 0;

const pScore = document.querySelector(".playerScore");
const cScore = document.querySelector('.compScore');
const round = document.querySelector(".round");
const roundResult = document.querySelector(".roundResult")
const buttons = document.querySelectorAll(".btn");
const gameStatus = document.querySelector(".gameStatus");
let round_number = 1;

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});