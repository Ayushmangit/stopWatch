const timer = document.getElementById("timer");

let counter = null; //will be used to clear the interval
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; //flag to maintain validity

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    counter = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (!isRunning) {
    reset();
  }
  if (isRunning) {
    clearInterval(counter);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(counter);
  startTime = 0;
  elapsedTime = 0;
  isRunning = 0;
  timer.textContent = `00:00:00:00`;
}

function update() {
  let currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    .toString()
    .padStart(2, 0);

  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
    .toString()
    .padStart(2, 0);

  let seconds = Math.floor((elapsedTime / 1000) % 60)
    .toString()
    .padStart(2, 0);

  let milliSeconds = Math.floor((elapsedTime % 1000) / 10)
    .toString()
    .padStart(2, 0);

  timer.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
  console.log(elapsedTime);
}
