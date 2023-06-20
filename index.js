function getComputerChoice()
{
    let selectionIndex = Math.floor(Math.random() * 3);

    if(selectionIndex == 0){
        return "Rock";
    }
    else if(selectionIndex == 1){
        return "Paper"
    }
    else{
        return "Scissor"
    }
}

console.log(getComputerChoice())