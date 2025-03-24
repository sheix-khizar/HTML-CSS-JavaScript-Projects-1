// script.js
let timer;
let totalSeconds = 0;
let isRunning = false;

function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let display = document.getElementById("countdown");

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        let inputMinutes = document.getElementById("minutesInput").value;
        if (!totalSeconds && inputMinutes) {
            totalSeconds = inputMinutes * 60;
        }
        if (totalSeconds > 0) {
            isRunning = true;
            timer = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    updateDisplay();
                } else {
                    clearInterval(timer);
                    isRunning = false;
                    alert("Time's up!");
                }
            }, 1000);
        }
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 0;
    document.getElementById("minutesInput").value = "";
    updateDisplay();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

updateDisplay();
