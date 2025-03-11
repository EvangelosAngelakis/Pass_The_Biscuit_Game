const selectedOptions = {
    CustardCreams: ["Surfing", "Gymnastics", "Spin", "Tennis", "Sprint", "Bend", "Painting", "Jump", "Walk", "Cycling", "Skip", "Crawl", "Football", "Cleaning", "Stretch"],
    Bourbon: ["Slide", "Exercising", "Jog", "Meditating", "Basketball", "Martial Arts", "Swim", "Writing", "Climb", "Volleyball", "Drinking", "Shopping", "Cricket", "Dancing", "Skateboarding"],
    RichTea: ["Cooking", "Swimming", "Baseball", "Reading", "Gardening", "Skiing", "Eating", "Golf", "Sleeping", "Roll", "Dive", "Driving"],
    Digestives: ["Exercising", "Cooking", "Baseball", "Jump", "Bend", "Eating", "Cricket", "Cycling", "Skateboarding", "Basketball", "Shopping", "Football", "Surfing", "Sprint", "Martial Arts"],
    Hobnobs: ["Cleaning", "Painting", "Sleeping", "Walk", "Crawl", "Gardening", "Writing", "Dive", "Stretch", "Volleyball", "Skip", "Slide", "Tennis", "Gymnastics", "Swimming"],
    JammieDodgers: ["Dancing", "Swim", "Reading", "Meditating", "Skiing", "Climb", "Drinking", "Golf", "Spin", "Roll", "Jog"]
};

let currentIndex = 0;

document.getElementById('Generate').addEventListener('click', function() {
    const category = document.getElementById('operation').value;
    const Result = document.getElementById('Result');
    let items;

    if (category === "All") {
        items = [].concat(...Object.values(selectedOptions));
        const randomIndex = Math.floor(Math.random() * items.length);
        Result.innerText = items[randomIndex];
    } else {
        items = selectedOptions[category];
        if (Result && items && items.length > 0) {
            Result.innerText = items[currentIndex];
            currentIndex = (currentIndex + 3) % items.length;
        } else {
            console.error('Element with id "Result" or selected category not found.');
        }
    }
});

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