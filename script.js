// Catch the Monster! - script.js
const monster = document.getElementById('monster');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const gameArea = document.getElementById('gameArea');

let score = 0;
let timeLeft = 30;
let timerInterval = null;
let moveInterval = null;

// INTENTIONAL CONFLICT TARGET: speed variable
// Default speed (ms between moves)
let speed = 1000;

function randomPosition() {
  const rect = gameArea.getBoundingClientRect();
  const x = Math.random() * (rect.width - 60) + 30;
  const y = Math.random() * (rect.height - 60) + 30;
  return { x, y };
}

function moveMonster() {
  const { x, y } = randomPosition();
  monster.style.left = `${x}px`;
  monster.style.top = `${y}px`;
  // small pop animation
  monster.style.transform = 'translate(-50%,-50%) scale(1.15)';
  setTimeout(() => {
    monster.style.transform = 'translate(-50%,-50%) scale(1)';
  }, 120);
}

function startGame() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;

  moveMonster();
  moveInterval = setInterval(moveMonster, speed);

  timerInterval = setInterval(() => {
    timeLeft -= 1;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      stopGame();
      alert(`Time's up! Your score: ${score}`);
    }
  }, 1000);
}

function stopGame() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  clearInterval(moveInterval);
  clearInterval(timerInterval);
}

function resetGame() {
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;
  moveMonster();
}

monster.addEventListener('click', () => {
  score += 1;
  scoreEl.textContent = score;
});

startBtn.addEventListener('click', startGame);
stopBtn.addEventListener('click', stopGame);
resetBtn.addEventListener('click', resetGame);

// ensure monster is inside area on load
window.addEventListener('load', moveMonster);
