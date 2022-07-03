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
    
    

function game(){
 let playerWins=0;
 let computerWins=0;
 for(let i=0; i<5;i++){
     let playerSelection= prompt("Rock, Paper or Scissors?");
     let computerSelection=computerPlay();
     let result= playRound(playerSelection, computerSelection);
     if (result === "You Win this round!"){
         playerWins++;
         console.log(`You won this round! The score is ${playerWins} - ${computerWins}
         the computer chose ${computerSelection}`);
     }
     else if (result === "You Lose this round!"){
         computerWins++;
         console.log(`You lost this round! The score is ${playerWins} - ${computerWins}
         the computer chose ${computerSelection}`);

     }
     else if(result === "It's a tie this round!"){         
         playerWins+=0.5;
         computerWins+=0.5;
         console.log(`It's a tie this round! The score is ${playerWins} - ${computerWins}
         the computer chose ${computerSelection}`);

     }
 }


 if (playerWins>computerWins) {
     console.log(`You won this game! The score is ${playerWins} - ${computerWins}`);
 }
 else if( computerWins>playerWins){
     console.log (`You Lost this game! The score is ${playerWins} - ${computerWins}`);
 }
else {
    console.log(`it's a tie! The score is ${playerWins} - ${computerWins}`);
}




}
game();



