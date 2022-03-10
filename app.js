// Play Choices Array
const playChoice = ["Rock", "Paper", "Scissors"];

// This function will return the computer's play
// and will randomly return Rock, Paper, or Scissors
function computerPlay() {
  // will return a random number string within the boundary of the index
  return playChoice[
    Math.floor(Math.random() * (playChoice.length - 1 - 0) + 0)
  ];
}

// stores the randomized commputer's play selection
let computerSelection = computerPlay();

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

let playerSelection = playerPlay();
