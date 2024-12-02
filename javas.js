let countdown;
let hours = 0;
let minutes = 0;
let seconds = 10;  // Örneğin, geri sayımı 10 saniyeden başlatalım.

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

function updateCountdown() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        seconds = 59;
        minutes--;
    } else if (hours > 0) {
        seconds = 59;
        minutes = 59;
        hours--;
    } else {
        clearInterval(countdown);
        alert("Countdown finished!");
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

startButton.addEventListener('click', () => {
    countdown = setInterval(updateCountdown, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    clearInterval(countdown);
    startButton.disabled = false;
    stopButton.disabled = true;
});
