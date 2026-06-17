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

const results = document.createElement("div"); // create results div
const result = document.createElement("h3");
const scoreText = document.createElement("h3");
const runningScore = document.createElement("p");
const final = document.createElement("h2");

results.appendChild(result);
results.appendChild(scoreText);
results.appendChild(runningScore);
results.appendChild(final);

body.appendChild(results);

//initialize scores
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let choice = event.target.textContent.toLowerCase();
    if (humanScore < 5 && computerScore < 5) {
      playRound(choice, getComputerChoice());
    }
  });
});
//play one round - get computer choice and human choice and see who wins
//Paper beats rock, rock beats scissors, scissors beats paper
function playRound(humanChoice, computerChoice) {
  roundsPlayed++;
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
    scoreText.textContent = "**SCORE**";
    runningScore.textContent = `You: ${humanScore}  |  Computer: ${computerScore}`;
    if (humanScore >= 5 || computerScore >= 5) {
      if (humanScore > computerScore) {
        final.textContent = "You win! Humanity prevails";
      } else if (humanScore < computerScore) {
        final.textContent = "You lose! HAIL SKYNET";
      } else {
        final.textContent = "It's a tie. The future is in your hands...";
      }
    }
  }
  // human win conditions:
  // human paper/PC rock
  if (humanChoice === "paper" && computerChoice === "rock") {
    winner = "win";
    result.textContent = "You win! Paper beats rock.";
  }
  // human rock/PC scissors
  else if (humanChoice === "rock" && computerChoice === "scissors") {
    winner = "win";
    result.textContent = "You win! Rock beats scissors.";
  }
  // human scissors/PC paper
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    winner = "win";
    result.textContent = "You win! Scissors beats paper.";
  }
  // PC win conditions:
  // PC paper/human rock
  else if (computerChoice === "paper" && humanChoice === "rock") {
    winner = "lose";
    result.textContent = "You lose! Paper beats rock.";
  }
  // PC rock/human scissors
  else if (computerChoice === "rock" && humanChoice === "scissors") {
    winner = "lose";
    result.textContent = "You lose! Rock beats scissors.";
  }
  // PC scissors/human paper
  else if (computerChoice === "scissors" && humanChoice === "paper") {
    winner = "lose";
    result.textContent = "You lose! Scissors beats paper.";
  } else if (humanChoice === computerChoice && roundsPlayed > 0) {
    result.textContent = "It's a tie!";
  }
  score();
}
