function computerPlay(){
    const originalArr=["Rock","Paper","Scissors"];
    return originalArr[Math.floor(Math.random()*originalArr.length)];
}

function playRound(playerSelection, computerSelection){

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "It's a tie this round!";
    }
        else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
   
     return "You Win this round!";
            
        }
        else if(playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors"){
        return "You Lose this round!";
        }

        else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper"){
            return "You Lose this round!";

        }
        else if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors"){
            return "You Win this round!";
        }
        else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock"){
            return "You Lose this round!";
    }

    else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper"){
        return "You Win this round!";
}
}

let rockbtn= document.querySelector('.rock');
let paperbtn= document.querySelector('.paper');
let scissorsbtn= document.querySelector('.scissors');
let resultDiv=document.querySelector('.result')
let result
let computerSelection

function caseRock(){
    computerSelection= computerPlay();
    result=playRound('rock',computerSelection);
    game()

}

function casePaper(){
    computerSelection= computerPlay();
    result= playRound('paper',computerSelection);
    game()

}

function caseScissors(){
    computerSelection= computerPlay();
    result= playRound('scissors',computerSelection);
game()
}




let playerWins=0;
let computerWins=0;
    

function game(){

if (result === "You Win this round!"){
         playerWins++;
         resultDiv.textContent=`You won this round! The score is ${playerWins} - ${computerWins},
         the computer chose ${computerSelection}`;
     }
else if (result === "You Lose this round!"){
         computerWins++;
         resultDiv.textContent=`You lost this round! The score is ${playerWins} - ${computerWins},
         the computer chose ${computerSelection}`;

     }
else if(result === "It's a tie this round!"){         
         playerWins+=0;
         computerWins+=0;
         resultDiv.textContent=`It's a tie this round! The score is ${playerWins} - ${computerWins},
         the computer chose ${computerSelection}`;}

         if (playerWins == 5){
            alert("You have won!");
            playerWins=0;
            computerWins=0;
            resultDiv.textContent='Congrats!'

        }
        else if (computerWins == 5){
            alert("You have lost!");
            playerWins=0;
            computerWins=0;
            resultDiv.textContent='No worries! try again.'

        }
     




}


rockbtn.addEventListener('click',caseRock);
paperbtn.addEventListener('click',casePaper);
scissorsbtn.addEventListener('click',caseScissors);

