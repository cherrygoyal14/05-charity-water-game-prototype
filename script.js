console.log("JS loaded");

let score = 0;
let timeLeft = 30;

const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const gameArea = document.getElementById("gameArea");

// Click event
gameArea.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  if (score >= 10) {
    alert("You win!");
  }
});

// Timer
let timer = setInterval(() => {
  timeLeft--;
  timeDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
    alert("Game Over!");
  }
}, 1000);

// Reset
function resetGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
}
