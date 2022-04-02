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

for (let humanButton of humanButtons) {
  humanButton.addEventListener("click", () => {
    if (humanButton.innerText.toLowerCase() === "rock") {
      let playerSelection = humanButton.innerText.toLowerCase();
      let computerSelection = computerPlay().toLowerCase();
      playRound(playerSelection, computerSelection);
      document.querySelector("#human-score").innerText = `${playerScore}`;
      document.querySelector("#computer-score").innerText = `${computerScore}`;
    } else if (humanButton.innerText.toLowerCase() === "paper") {
      let playerSelection = humanButton.innerText.toLowerCase();
      let computerSelection = computerPlay().toLowerCase();
      playRound(playerSelection, computerSelection);
      document.querySelector("#human-score").innerText = `${playerScore}`;
      document.querySelector("#computer-score").innerText = `${computerScore}`;
    } else {
      let playerSelection = humanButton.innerText.toLowerCase();
      let computerSelection = computerPlay().toLowerCase();
      playRound(playerSelection, computerSelection);
      document.querySelector("#human-score").innerText = `${playerScore}`;
      document.querySelector("#computer-score").innerText = `${computerScore}`;
    }
  });
}

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
