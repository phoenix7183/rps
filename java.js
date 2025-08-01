console.log("hello World");

function computerChoice (){

    let choices= ["rock", "paper", "scissors"];
  let compOption= Math.floor(Math.random()*choices.length);
  return compOption;
}
console.log(computerChoice());