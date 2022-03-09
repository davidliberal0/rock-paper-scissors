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
