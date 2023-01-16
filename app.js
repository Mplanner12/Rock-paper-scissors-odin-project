const choices = ["rock", "paper", "scissors"];
const winners = []

function game() {
  // contains the whole game
  for(let i = 1; i<= 5; i++){
    playRound(i)
  }
  logWins()
  document.querySelector("button").textContent = "Start new Game";
}


function playRound(round) {
  //declaration of variables and calling out functions
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  winner = checkWin(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round)
}


function playerChoice() {
  // an input is prompted for the user to make an input
  let input = prompt("Make a choice between rock, paper, and scissors: ");
  while(input == null){
    input = prompt("Make a choice between rock, paper, and scissors: ")
  }
  input = input.toLowerCase()
  let check = validateInput(input)
  if(check == false){
    input = prompt("entry must be exactly between rock, paper, and scissors, capitalisation doesn't matter: ")
  }
  else if(input == null){
    input = prompt("Make a choice between rock, paper, and scissors: ")
  }
  input = input.toLowerCase();
  check = validateInput(input);
  return input
}


function validateInput(choice) {
  // validation of entry made by the user
  return choices.includes(choice)
}


function computerChoice() {
  // random choices made by the computer
  return choices[Math.floor(Math.random ()*choices.length)]
}

function checkWin(choiceP, choiceC) {
  // winner is been checked
  if (choiceP == choiceC) {
    return "tie"
  }
  else if((choiceP == "scissors" && choiceC == "paper") || (choiceP == "paper" && choiceC == "rock") || (choiceP == "rock" && choiceC == "scissors")){
      return "player"
  }
  else{
    return "computer"
  }
} 


function logRound(playerChoice, computerChoice, winner, round) {
  // displaying result of each round
  console.log("Round: ", round);
  console.log("Player Choice: ", playerChoice);
  console.log("Computer Choice: ", computerChoice);
  console.log(winner," won the round")
  console.log("------------------------")
}

function logWins() {
  // logging in individual wins
  let playerWin = winners.filter((item)=> item == "player").length;
  let computerWin = winners.filter((item)=> item == "computer").length;
  let tie = winners.filter((item)=> item == "tie").length;
  console.log("Result: ");
  console.log("PlayerWins: ",playerWin);
  console.log("computerWins: ",computerWin)
  console.log('Tie: ',tie)

}