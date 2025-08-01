console.log("hello World");

function computerChoice (){

    let choices= ["rock", "paper", "scissors"];
  let compOption= choices[Math.floor(Math.random()*choices.length)];
  return compOption;
}



function userChoice (){
   let userOption= prompt("choose among rock, paper, scissors","");
    let userOptCaseInsensitive= userOption.toLowerCase();
   return userOptCaseInsensitive;
}

let userScore=0;
let computerScore=0;

function playRound(){
    for (let i = 0; i <= 5; i++) {
        console.log(computerChoice());
        console.log(userChoice());

        if (computerChoice()=="rock" && userChoice()=="rock") {
            return alert("draw")
           }
        else if ( computerChoice()=="rock"&& userChoice()=='paper'){
            userScore++;
            return alert("paper beat rock");
        } 
        else if ( computerChoice()=="rock"&& userChoice()=='scissors'){
            computerScore++;
            return alert("rock beats scissors");
        }  
        else if (computerChoice()=='paper'&& userChoice=="rock"){
            computerScore++;
            return alert("paper beats rock");
        }
        else if ( computerChoice()== 'paper'&& userChoice()=='paper'){
            return alert("it's a draw");
        }
        else if (computerChoice()=='paper'&& userChoice()=='scissors'){
            userScore++;
            return alert('scissors beat paper');
        }
        else if (computerChoice()=='scissors'&& userChoice()=='rock'){
            userScore++;
            return alert('rock beats scissors');
        }
        else if(computerChoice()=='scissors'&& userChoice()=='paper'){
            computerScore++;
            return alert('scissors beats paper');
        }
        else if (computerChoice()=='scissors'&& userChoice()=='scissors'){
            return alert('it is a draw')
        }
    }
}
console.log(playRound());
console.log(userScore);
console.log(computerScore);