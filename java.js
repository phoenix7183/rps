const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
let choices=["rock", "paper", "scissors"];
const div=document.querySelector(".div");
const h1= document.querySelector('h1');
const playerTotal= document.querySelector(".player");
const compTotal=document.querySelector(".comp");


let playerScore=0;
let compScore=0;
    

function playGame (userSelection) {
function compChoice(){ 
    return choices[Math.floor(Math.random()*choices.length)];
   }
   
   let compSelection= compChoice();
   console.log(compSelection);
   div.textContent=`Player Choice: ${userSelection}`;
   
   if (userSelection==compSelection){
    h1.textContent= "It's a tie"
    playerScore++;
    compScore++;
   }
   else if(userSelection=="rock" && compSelection=="scissors"||userSelection=="paper"&&compSelection=="rock"||userSelection=="scissors"&&compSelection=="paper"){
    h1.textContent= `You win! ${userSelection} beats ${compSelection}`;
    playerScore++;
    }
else if(userSelection=="scissors" && compSelection=="rock"||userSelection=="rock"&&compSelection=="paper"||userSelection=="paper"&&compSelection=="scissors"){
    h1.textContent= `You Loose! ${compSelection} beats ${userSelection}`;
    compScore++;
    }

playerTotal.textContent=`${playerScore}`
compTotal.textContent=`${compScore}`

}

