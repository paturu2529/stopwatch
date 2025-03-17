// Clock functionality
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Stopwatch functionality
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchTime = 0;

const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');

function updateStopwatch() {
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;

    document.getElementById('stopwatch').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startStopBtn.addEventListener('click', () => {
    if (!stopwatchRunning) {
        // Start stopwatch
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatch();
        }, 1000);
        startStopBtn.textContent = 'Stop';
    } else {
        // Stop stopwatch
        clearInterval(stopwatchInterval);
        startStopBtn.textContent = 'Start';
    }
    stopwatchRunning = !stopwatchRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchRunning = false;
    startStopBtn.textContent = 'Start';
    updateStopwatch();
}); 