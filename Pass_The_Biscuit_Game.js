let timeLeft = 120;
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
let countdown;

startButton.addEventListener('click', () => {
    if (countdown) {
        clearInterval(countdown);
    }
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert('Time is up!');
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
});

RstTimer.addEventListener('click', () => {
    clearInterval(countdown);
    timeLeft = 120;
    timerElement.textContent = timeLeft;
});

function resetPage(){
    location.reload();
}