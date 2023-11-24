const timeDisplay = document.getElementById("timeDisplay");
const playBtn = document.getElementById("play");
const resetBtn = document.getElementById("reset");
let startTime = 0, elapsedTime = 0, currentTime = 0, paused = true, intervalId, hrs = 0, min = 0, sec = 0;

playBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      sec = Math.floor((elapsedTime / 1000) % 60);
      min = Math.floor((elapsedTime / (1000 * 60)) % 60);
      hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
      timeDisplay.textContent = `${hrs}:${min}:${sec}`;
    }, 1000);
    playBtn.classList = "fa-solid fa-pause";
  } else {
    paused = true;
    clearInterval(intervalId);
    playBtn.classList = "fa-solid fa-play";
  }
});

resetBtn.addEventListener("click", () => {
  playBtn.classList = "fa-solid fa-play";
  paused = true;
  clearInterval(intervalId);
  startTime = elapsedTime = currentTime = hrs = min = sec = 0;
  timeDisplay.textContent = "00:00:00";
});
