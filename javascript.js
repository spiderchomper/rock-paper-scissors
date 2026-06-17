//getComputerChoice Randomly returns rock, paper, scissors
//Math.random returns value btwn 0,1. multiply by 3 add 1 to get 1-3 rand number?
function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3) + 1;
  switch (choiceNum) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    default:
      return "scissors";
  }
}

const playUI = document.createElement("div"); // create UI
playUI.id = "playUI";
const body = document.querySelector("body");
body.appendChild(playUI); // add UI element to HTML body

const rock = document.createElement("button");
rock.textContent = "Rock";

const paper = document.createElement("button");
paper.textContent = "Paper";

const scissors = document.createElement("button");
scissors.textContent = "Scissors";

const header = document.createElement("h1");
header.textContent = "Let's play rock paper scissors!";

playUI.appendChild(header);
playUI.appendChild(rock);
playUI.appendChild(paper);
playUI.appendChild(scissors);

//getHumanChoice prompts input from player
/*function getHumanChoice() {
  let choice = prompt("Rock, paper, or scissors?: ").toLowerCase();
  return choice;
}*/

//function playGame() {
//initialize scores
let humanScore = 0;
let computerScore = 0;

let playClick = document.querySelector("#playUI");
playClick.addEventListener("click", (event) => {
  let choice = event.target.textContent.toLowerCase();
  playRound(choice, getComputerChoice());
});
//play one round - get computer choice and human choice and see who wins
//Paper beats rock, rock beats scissors, scissors beats paper
function playRound(humanChoice, computerChoice) {
  let winner;
  function score() {
    switch (winner) {
      case "win":
        humanScore++;
        break;
      case "lose":
        computerScore++;
        break;
      default:
    }
    //  console.log(`SCORE\nYou: ${humanScore} | Computer: ${computerScore}`);
  }
  // human win conditions:
  // human paper/PC rock
  if (humanChoice === "paper" && computerChoice === "rock") {
    winner = "win";
    console.log("You win! Paper beats rock.");
  }
  // human rock/PC scissors
  else if (humanChoice === "rock" && computerChoice === "scissors") {
    winner = "win";
    console.log("You win! Rock beats scissors.");
  }
  // human scissors/PC paper
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    winner = "win";
    console.log("You win! Scissors beats paper.");
  }
  // PC win conditions:
  // PC paper/human rock
  else if (computerChoice === "paper" && humanChoice === "rock") {
    winner = "lose";
    console.log("You lose! Paper beats rock.");
  }
  // PC rock/human scissors
  else if (computerChoice === "rock" && humanChoice === "scissors") {
    winner = "lose";
    console.log("You lose! Rock beats scissors.");
  }
  // PC scissors/human paper
  else if (computerChoice === "scissors" && humanChoice === "paper") {
    winner = "lose";
    console.log("You lose! Scissors beats paper.");
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  }
  score();
}

// INCREMENT from 1 to 5, call playRound each time up to 5
//for (i = 1; i <= 5; i++) {

playRound(playClick, getComputerChoice());
//}

//console.log(
//  `***FINAL SCORE***\nYou: ${humanScore} | Computer: ${computerScore}`,
//);
if (playClick) {
  if (humanScore > computerScore) {
    console.log("You win! Humanity prevails");
  } else if (humanScore < computerScore) {
    console.log("You lose! HAIL SKYNET");
  } else {
    console.log("It's a tie. The future is in your hands...");
  }
}
//}
