let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("Tie");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You win! Rock destroys scissors.");
    return (playerScore += 1);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You win! Paper covers rock.");
    return (playerScore += 1);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win! Scissors cut paper.");
    return (playerScore += 1);
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose! Scissors cut paper.");
    return (computerScore += 1);
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You lose! Paper covers rock");
    return (computerScore += 1);
  } else {
    console.log("You Lose! Rock destroys scissors.");
    return (computerScore += 1);
  }
}

// Play Choices Array
const playChoice = ["Rock", "Paper", "Scissors"];

// This function will return the computer's play
// and will randomly return Rock, Paper, or Scissors
function computerPlay() {
  // will return a random number string within the boundary of the index
  return playChoice[Math.floor(Math.random() * (playChoice.length - 0) + 0)];
}

// stores the randomized commputer's play selection
// let computerSelection = computerPlay();

// Function for player
function playerPlay() {
  let play = prompt(
    "Please select a choice: Rock, Paper or Scissors.."
  ).toLowerCase();

  if (play === "rock") {
    return playChoice[0];
  } else if (play === "paper") {
    return playChoice[1];
  } else {
    return playChoice[2];
  }
}

// let playerSelection = playerPlay();

function game() {
  // Controls the amount of rounds for the game
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay().toLowerCase();
    console.log(`Player: ${playerSelection}`);
    let computerSelection = computerPlay().toLowerCase();
    console.log(`Computer: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Round You:${playerScore} || Computer ${computerScore}`);
    console.log("------------------------------------------------------");
  }
}

game();
