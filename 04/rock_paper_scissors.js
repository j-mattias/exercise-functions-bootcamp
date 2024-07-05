const maxWins = 3;
let numWinsPlayer = 0, numWinsComputer = 0;
let choices = ["rock", "paper", "scissors"];

while (numWinsPlayer < maxWins && numWinsComputer < maxWins) {
  const player = prompt("Pick rock, paper or scissors").toLowerCase();
  const computer = choices[randomize(0, choices.length - 1)];

  if (!validateChoice(player, choices)) {
    alert(`${player} is not a valid option. Expected rock, paper or scissors`);
    continue;
  }

  console.log(`Player: ${player} vs. Computer: ${computer}`);
  alert(compareChoice(player, computer));
  alert(`Current score: Player1 (${numWinsPlayer}) | Player2 (${numWinsComputer})`);
}

if (numWinsPlayer === maxWins) {
  alert(`Player wins!`);
} else {
  alert(`Computer wins!`);
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function validateChoice(playerChoice, choices) {
  if (!choices.includes(playerChoice)) {
    return false;
  }
  return true;
}

function compareChoice(playerChoice, computerChoice) {
  if (playerChoice !== computerChoice) {
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      numWinsPlayer++;
      return `Player1 wins the round`;
    } else {
      numWinsComputer++;
      return `Computer wins the round`;
    }
  } else {
    return "Draw";
  }
}