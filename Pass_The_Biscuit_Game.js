document.getElementById('toggleButton').addEventListener('click', function() {
    var contentDiv = document.getElementById('contentDiv');
    var toggleButton = document.getElementById('toggleButton'); 
    var body = document.body; 

    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');
        toggleButton.style.backgroundColor = 'rgba(245, 245, 245, 0.2)';
        toggleButton.style.color = 'rgb(172, 169, 169)';
        toggleButton.style.border = '1px solid  rgb(212, 210, 210)';
        body.style.backgroundSize = 'auto';
    } else {
        contentDiv.classList.add('hidden');
        toggleButton.style.backgroundColor = 'rgba(245, 245, 245, 0.2)';
        toggleButton.style.color = 'rgb(80, 79, 79)';
        toggleButton.style.border = '1px solid black';
        body.style.backgroundSize = '360px 860px';
    }
});


const button = document.getElementById("toggleButton");
const paragraphs = document.getElementById("contentDiv");

button.addEventListener("click", () => {
  const isVisible = paragraphs.style.display === "block";

  if (isVisible) {
    paragraphs.style.display = "none";
    button.textContent = "Press to see instructions";
  } else {
    paragraphs.style.display = "block";
    button.textContent = "Press to hide instructions";
    paragraphs.style.backgroundColor = "rgba(179, 196, 196, 0.356)";
    paragraphs.style.boxShadow = "5px 5px 5px gray";
    paragraphs.style.border = "1px solid gray";
    paragraphs.style.borderRadius = "5px";
  }
});



const selectedOptions = {
    CustardCreams: ["Cycling", "Crawl", "Bend", "Gymnastics", "Football", "Skip", "Sprint", "Painting", "Cleaning", "Surfing", "Jump", "Walk", "Tennis", "Spin", "Stretch"],
    Bourbon: ["Meditating", "Writing", "Martial Arts", "Slide", "Cricket", "Dancing", "Basketball", "Shopping", "Exercising", "Drinking", "Climb", "Skateboarding", "Volleyball", "Jog", "Swim"],
    RichTea: ["Cooking", "Eating", "Skiing", "Reading", "Driving", "Swimming", "Roll", "Sleeping", "Baseball", "Gardening", "Golf", "Dive", "Cow", "Duck", "Chicken", "Turkey", "Bee"],
    Digestives: ["Cycling", "Sprint", "Football", "Eating", "Exercising", "Skateboarding", "Shopping", "Cooking", "Bend", "Surfing", "Martial Arts", "Cricket", "Baseball", "Jump", "Basketball"],
    Hobnobs: ["Gymnastics", "Skip", "Cleaning", "Sleeping", "Walk", "Crawl", "Slide", "Dive", "Gardening", "Tennis", "Writing", "Swimming", "Stretch", "Painting", "Volleyball"],
    JammieDodgers: ["Dancing", "Swim", "Reading", "Meditating", "Skiing", "Climb", "Drinking", "Golf", "Spin", "Roll", "Lion", "Elephant", "Kangaroo", "Penguin", "Wolf", "Bear", "Frog", "Sheep"]
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

let timeLeft = 59;
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
    timeLeft = 60;
    timerElement.textContent = timeLeft;
    isRunning = false;
});

let counts = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    counter5: 0,
    counter6: 0,
    counter7: 0,
    counter8: 0
};

function addPoint(counterId) {
    counts[counterId]++;
    document.getElementById(counterId).innerText = counts[counterId];
}

function subtractPoint(counterId) {
    if (counts[counterId] > 0) {
        counts[counterId]--;
        document.getElementById(counterId).innerText = counts[counterId];
    }
}

function resetPage(){
    location.reload();
}