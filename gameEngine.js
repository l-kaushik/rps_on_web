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
    // for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}: `);
        console.log(playRound(playerResponse, getComputerChoice()));
        
        if (computerScore == playerScore) {
            console.log(`both got same points ${computerScore}`);
        }
        else if (playerScore > computerScore) {
            console.log(`Player wins by ${playerScore - computerScore}`);
        }
        else {
            console.log(`Computer wins by ${computerScore - playerScore}`);
        }
        
        // }
}

// function getPlayerChoice() {
//     let playerSelection = 
    // playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    // while (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {

    //     console.log(`Invalid input "${playerSelection}", must be "rock" or "paper" or "scissors"`);

    //     playerSelection = prompt("Enter your selection: ");
    //     playerSelection = playerSelection.toLowerCase();
    //     playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
   
    // }
    // return playerSelection;
// }


// Main game program starts from here

var playerScore = 0, computerScore = 0;

// game();



// selecting the button

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) =>{
    button.addEventListener("click",(e)=>{
       game(e.target.textContent); 
    });
})