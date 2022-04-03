let playerScore = 0;
let computerScore = 0;

// Play Choices Array
const playChoice = ["Rock", "Paper", "Scissors"];

// Randomizes computer choice by randomly selecting a position in playChoice array
function computerPlay() {
  // will return a random number string within the boundary of the index
  return playChoice[Math.floor(Math.random() * (playChoice.length - 0) + 0)];
}

// Selects all computer buttons
const computerButtons = document.querySelectorAll(".computer-choice");

// // Displays a shadow behind button of the computer's selected choice
// function OnScrnComputerButton(computerSelection) {
//   // let computerSelection = computerPlay().toLowerCase();

//   for (let computerButton of computerButtons) {
//     if (computerButton.innerText.toLowerCase() === computerSelection) {
//       computerButton.style.backgroundColor = "#4e5e9e";
//       computerButton.style.boxShadow =
//         "rgba(rgba(255, 225, 255, 0.56) 0px 22px 70px 4px";
//     } else if (computerButton.innerText.toLowerCase() === computerSelection) {
//       computerButton.style.backgroundColor = "#4e5e9e";
//       computerButton.style.boxShadow =
//         "rgba(rgba(255, 225, 255, 0.56) 0px 22px 70px 4px";
//     } else {
//       computerButton.style.backgroundColor = "#4e5e9e";
//       computerButton.style.boxShadow =
//         "rgba(rgba(255, 225, 255, 0.56) 0px 22px 70px 4px";
//     }
//   }
// }

// Select all human buttons
const humanButtons = document.querySelectorAll(".button-selector");
const winMessage = document.querySelector("#winning-message");

function playGame() {
  for (let humanButton of humanButtons) {
    humanButton.addEventListener("click", () => {
      if (humanButton.innerText.toLowerCase() === "rock") {
        let playerSelection = humanButton.innerText.toLowerCase();
        let computerSelection = computerPlay().toLowerCase();
        playRound(playerSelection, computerSelection);
        displayScores();
      } else if (humanButton.innerText.toLowerCase() === "paper") {
        let playerSelection = humanButton.innerText.toLowerCase();
        let computerSelection = computerPlay().toLowerCase();
        playRound(playerSelection, computerSelection);
        displayScores();
      } else {
        let playerSelection = humanButton.innerText.toLowerCase();
        let computerSelection = computerPlay().toLowerCase();
        playRound(playerSelection, computerSelection);
        displayScores();
      }
    });
  }

  if (playerScore == 5) {
    winMessage.innerText = innerText = "You Win";
  } else {
    winMessage.innerText = "Computer Wins";
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

const humanScore = document.querySelector("#human-score");
const cpuScore = document.querySelector("#computer-score");

function displayScores() {
  humanScore.innerText = `${playerScore}`;
  cpuScore.innerText = `${computerScore}`;
}

playGame();
