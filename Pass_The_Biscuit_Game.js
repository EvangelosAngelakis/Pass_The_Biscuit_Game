let timeLeft = 120;
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const RstTimer = document.getElementById('RstTimer'); 
let countdown;
let isRunning = false; 

startButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(countdown);
        isRunning = false;
    } else {
        countdown = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert('Time is up!');
                isRunning = false;
            } else {
                timerElement.textContent = timeLeft;
                timeLeft--;
            }
        }, 1000);
        isRunning = true;
    }
});

RstTimer.addEventListener('click', () => {
    clearInterval(countdown);
    timeLeft = 120;
    timerElement.textContent = timeLeft;
    isRunning = false;
});

function resetPage(){
    location.reload();
}