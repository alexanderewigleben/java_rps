let playerWins = 0;
let computerWins = 0;
let playerSelection =""


function computerPlay() {

    let computerSelection = Math.floor(Math.random() * 3);

    if (computerSelection==0) {    
        return "rock";
    }
    else if (computerSelection==1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

    
function playRound(playerSelection, computerSelection){

    if (computerSelection == "scissors" && playerSelection=="rock"){
        playerWins = ++playerWins;
        resultBox.textContent = "You WIN!";
        playerScore.textContent = playerWins;
    }

    else if (computerSelection=="scissors" && playerSelection=="paper"){   
        computerWins = ++computerWins;     
        cpuScore.textContent = computerWins;
        resultBox.textContent = "You LOSE ";
    }

    else if (computerSelection=="scissors" && playerSelection=="scissors"){
        resultBox.textContent = "You TIED";
    }

    else if (computerSelection=="rock" && playerSelection=="rock"){
        resultBox.textContent ="You TIED";
    }

    else if (computerSelection=="rock" && playerSelection=="paper"){
        playerWins = ++playerWins;
        playerScore.textContent = playerWins;
        resultBox.textContent="You WIN!";
    }

    else if (computerSelection=="rock" && playerSelection=="scissors"){
        computerWins = ++computerWins; 
        cpuScore.textContent = computerWins;
        resultBox.textContent="You LOST";
     }

    else if (computerSelection=="paper" && playerSelection=="rock"){
        computerWins = ++computerWins; 
        cpuScore.textContent = computerWins;
        resultBox.textContent="You LOST";
    }

    else if (computerSelection=="paper" & playerSelection=="paper"){
        resultBox.textContent="You TIED";
    }

    else if (computerSelection=="paper" & playerSelection=="scissors"){
        playerWins = ++playerWins;
        playerScore.textContent = playerWins;
        resultBox.textContent="You WIN!";
    }
    playSelection.textContent = playerSelection;
    cpuSelection.textContent=computerSelection;

    if (playerWins == 5 || computerWins ==5) {
        if (playerWins > computerWins)
            resultBox.textContent="YOU WON THE WHOLE POT!"
        else {
            resultBox.textContent="you done lost the whole thang"
        }
    playerWins = 0;
    computerWins = 0;
    playerScore.textContent= "0"
    cpuScore.textContent="0"
    }
}

    
 

 const buttons =  document.querySelectorAll('button');
 buttons.forEach((button) => {

    button.addEventListener('click', ()=>  {
        computerPlay();
        if (button.id == 'rock'){
            playerSelection = "rock";
        }
        else if (button.id =="paper"){
            playerSelection="paper";
        }
        else {
            playerSelection="scissors"
        }
        let computerMove = computerPlay();
        playRound(playerSelection, computerMove);
    
     });

    
});
