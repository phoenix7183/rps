console.log("hello World");
let userScore=0;
let computerScore=0;

let userOption= document.querySelectorAll("buttons");
   let rock= document.querySelector(".rock");
   let paper=document.querySelector(".paper");
   let scissors=document.querySelector("scissors");
   userOption.addEventList

for (let i = 0; i < 5; i++) {
    

function computerChoice (){

    let choices= ["rock", "paper", "scissors"];
  let compOption= choices[Math.floor(Math.random()*choices.length)];
  return compOption;
}

let compSelection= computerChoice();
console.log(compSelection);


function userChoice (){
   
   
    let userOptCaseInsensitive= userOption.toLowerCase();
   return userOptCaseInsensitive;
}
let userSelection= userChoice();
console.log(userSelection);

function playRound( compSelection, userSelection) {
    

        if (compSelection==userSelection) {
            return ("draw")
           }
        else if ( compSelection=="rock"&& userSelection=='paper'||compSelection=='paper'&& userSelection=='scissors'||compSelection=='scissors'&& userSelection=='rock'){
            userScore++;
    return alert(`You Win ${userSelection} beats ${compSelection}`)
        } 
        computerScore++
    return alert(`You Loose! ${compSelection} beats ${userSelection}`)
    
}

playRound( compSelection, userSelection);
}
console.log(userScore);
console.log(computerScore);

if (userScore>computerScore){
    alert("Congratulations! You won the tournament")
}
else alert("Oops! you lost the tournament")