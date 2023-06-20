function getComputerChoice()
{
    let selectionIndex = Math.floor(Math.random() * 3);

    if(selectionIndex == 0){
        return "Rock";
    }
    else if(selectionIndex == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    
    if (playerSelection == computerSelection){
        return `Both choose ${playerSelection}, so its a tie`;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors")|| (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")){
        return `${playerSelection} beats ${computerSelection} and player got a point`;
    }
    else{
        return `${computerSelection} beats ${playerSelection} and computer got a point`;
    }
}


let computerSelection = getComputerChoice();

let playerSelection = prompt("Enter your selection: ").toLowerCase();
playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

if(playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors"){
    console.log(`Invalid input "${playerSelection}", must be "rock" or "paper" or "scissors"`);
}else{

    console.log(playRound(playerSelection,computerSelection));
    
}


