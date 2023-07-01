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
        return `Both choose ${playerSelection}\nits a tie!`;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")) {
        playerScore += 1;
        return `${playerSelection} beats ${computerSelection}\nplayer got a point`;
    }
    else {
        computerScore += 1;
        return `${computerSelection} beats ${playerSelection}\ncomputer got a point`;
    }
}

function handleButtonClick(e) {
    
    instruction.remove();
    round.textContent = `round ${round_number}`;
    gameStatus.textContent = playRound(e.target.textContent, getComputerChoice());
    gameStatus.style.whiteSpace = "pre-line";
    round_number++;
    pScore.textContent = `Player Score:- ${playerScore}`;
    cScore.textContent = `Computer Score:- ${computerScore}`;

    if (playerScore == 5 || computerScore == 5) {
        buttons.forEach((button) => {
            button.removeEventListener("click", handleButtonClick);
        });

        if(computerScore == playerScore) {
            gameStatus.textContent = `both got same points ${computerScore}`;
            displayMessage("It's a Tie!");
        }
        else if (playerScore > computerScore) {
            gameStatus.textContent = `Player wins by ${playerScore - computerScore} points`;
            displayMessage("Congratulations! You win the game!");
        }   
        else {
            gameStatus.textContent = `Computer wins by ${computerScore - playerScore} points`;
            displayMessage("Oops! Computer wins the game. Better luck next time!");
        }
    }
}

function displayMessage(message) {
    const messageElement = document.createElement("div");
    const restartButton = document.createElement("button");
    restartButton.textContent = "restart";

    messageElement.textContent = message;

    main.appendChild(restartButton)
    restartButton.classList.add("resetBtn")
    main.appendChild(messageElement);

    restartGame(messageElement, restartButton);

}

function restartGame(messageElement, restartButton) {

    // if !(round) return round.
    restartButton.addEventListener("click", () => {
        location.reload();
        // round.textContent = "";
        // pScore.textContent = "";
        // cScore.textContent = "";
        // playerScore = 0;
        // computerScore = 0;
        // round_number = 1;
        // gameStatus.textContent = "click on button to start the game";

        // buttons.forEach((button) => {
        //     button.addEventListener("click", handleButtonClick);
        // });

        // messageElement.remove();
        // restartButton.remove();

    });
}


// Main game program starts from here

let playerScore = 0, computerScore = 0;

const pScore = document.querySelector(".playerScore");
const cScore = document.querySelector('.compScore');
const round = document.querySelector(".round");
const roundResult = document.querySelector(".roundResult")
const buttons = document.querySelectorAll(".btn");
const gameStatus = document.querySelector(".gameStatus h3");
const instruction = document.querySelector(".gameStatus h4");
const main = document.querySelector(".main");
let round_number = 1;

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});