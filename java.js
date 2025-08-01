console.log("hello World");

function computerChoice (){

    let choices= ["rock", "paper", "scissors"];
  let compOption= choices[Math.floor(Math.random()*choices.length)];
  return compOption;
}

let compSelection= computerChoice();
console.log(compSelection);

function userChoice (){
   let userOption= prompt("choose among rock, paper, scissors","");
    let userOptCaseInsensitive= userOption.toLowerCase();
   return userOptCaseInsensitive;
}
let userSelection= userChoice();
console.log(userSelection);
let userScore=0;
let computerScore=0;

function playRound( compSelection, userSelection) {
    

        if (compSelection==userSelection) {
            return ("draw")
           }
        else if ( compSelection=="rock"&& userSelection=='paper'||compSelection=='paper'&& userSelection=='scissors'||compSelection=='scissors'&& userSelection=='rock'){
            userScore++;
    return alert(`You Win ${userSelection} beats ${compSelection}`)
        } 
    return alert(`You Loose! ${compSelection} beats ${userSelection}`)
    
}

console.log(playRound(compSelection, userSelection));
console.log(userScore);
console.log(computerScore);