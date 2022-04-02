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

// ----------------------------------------------
// Select all human buttons
const humanButtons = document.querySelectorAll(".button-selector");

// Function for player
function playerPlay() {
  // Gives all human buttons functions
  for (let humanButton of humanButtons) {
    humanButton.addEventListener("click", () => {
      if (humanButton.innerText === "rock") {
        return playChoice[0];
      } else if (humanButton.innerText === "paper") {
        return playChoice[1];
      } else {
        return playChoice[2];
      }
    });
  }
}

// -------------------------------------

const computerButtons = document.querySelectorAll(".computer-choice");

function OnScrnComputerButton() {
  let computerSelection = computerPlay().toLowerCase();

  for (let computerButton of computerButtons) {
    if (computerButton.innerText === computerSelection) {
      computerButton.style.backgroundColor = "#4e5e9e";
      computerButton.style.boxShadow =
        "rgba(rgba(255, 225, 255, 0.56) 0px 22px 70px 4px";
    } else if (computerButton.innerText === computerSelection) {
      computerButton.style.backgroundColor = "#4e5e9e";
      computerButton.style.boxShadow =
        "rgba(rgba(255, 225, 255, 0.56) 0px 22px 70px 4px";
    } else {
      computerButton.style.backgroundColor = "#4e5e9e";
      computerButton.style.boxShadow =
        "rgba(rgba(255, 225, 255, 0.56) 0px 22px 70px 4px";
    }
  }
}

// --------------------------------

// let playerSelection = playerPlay();

function game() {
  // Controls the amount of rounds for the game
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    OnScrnComputerButton();
    playRound(playerSelection, computerSelection);
    document.querySelector("#computer-score").innerText = `${computerScore}`;
    document.querySelector("#human-score").innerText = `${playerScore}`;
  }
}

game();
