let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let gameOver = false;

// Play Choices Array
const playChoice = ["Rock", "Paper", "Scissors"];

// Randomizes computer choice by randomly selecting a position in playChoice array
function computerPlay() {
  // will return a random number string within the boundary of the index
  return playChoice[Math.floor(Math.random() * (playChoice.length - 0) + 0)];
}

// Selects all computer buttons
const computerButtons = document.querySelectorAll(".computer-choice");

// Select all human buttons
const humanButtons = document.querySelectorAll(".button-selector");
const winMessage = document.querySelector("#winning-message");

function gameAction() {
  for (let humanButton of humanButtons) {
    humanButton.addEventListener("click", () => {
      if (humanButton.innerText.toLowerCase() === "rock") {
        if (playerScore != 5 && computerScore != 5) {
          let playerSelection = humanButton.innerText.toLowerCase();
          let computerSelection = computerPlay().toLowerCase();
          playRound(playerSelection, computerSelection);
          displayScores();
          fiveRounds();
        }
      } else if (humanButton.innerText.toLowerCase() === "paper") {
        if (playerScore != 5 && computerScore != 5) {
          let playerSelection = humanButton.innerText.toLowerCase();
          let computerSelection = computerPlay().toLowerCase();
          playRound(playerSelection, computerSelection);
          displayScores();
          fiveRounds();
        }
      } else {
        if (playerScore != 5 && computerScore != 5) {
          let playerSelection = humanButton.innerText.toLowerCase();
          let computerSelection = computerPlay().toLowerCase();
          playRound(playerSelection, computerSelection);
          displayScores();
          fiveRounds();
        }
      }
    });
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    winMessage.innerText = "Tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    winMessage.innerText = "You win! Rock destroys scissors.";
    return (playerScore += 1);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    winMessage.innerText = "You win! Paper covers rock.";
    return (playerScore += 1);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    winMessage.innerText = "You win! Scissors cut paper.";
    return (playerScore += 1);
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    winMessage.innerText = "You lose! Scissors cut paper.";
    return (computerScore += 1);
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    winMessage.innerText = "You lose! Paper covers rock";
    return (computerScore += 1);
  } else {
    winMessage.innerText = "You Lose! Rock destroys scissors.";
    return (computerScore += 1);
  }
}

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  winMessage.innerText = "";
  gameOver = false;
  humanScore.innerText = `${playerScore}`;
  cpuScore.innerText = `${computerScore}`;
});

function fiveRounds() {
  if (playerScore == 5) {
    winMessage.innerText = "You Win!";
  } else if (computerScore == 5) {
    winMessage.innerText = "Computer Wins!";
  }
}

const humanScore = document.querySelector("#human-score");
const cpuScore = document.querySelector("#computer-score");

function displayScores() {
  humanScore.innerText = `${playerScore}`;
  cpuScore.innerText = `${computerScore}`;
}

gameAction();
