console.log("hello World");

function computerChoice (){

    let choices= ["rock", "paper", "scissors"];
  let compOption= choices[Math.floor(Math.random()*choices.length)];
  return compOption;
}
console.log(computerChoice());

function userChoice (){
   let userOption= prompt("choose among rock, paper, scissors","");
    let userOptCaseInsensitive= userOption.toLowerCase();
   return userOptCaseInsensitive;
}
console.log(userChoice());

let userScore=0;
let computerScore=0;

function playRound(){
    for (let i = 0; i <= 5; i++) {
        if () {
            
        }
        
    }
}