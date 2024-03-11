let timeInSeconds36 = 30 * 60 * 60; // 36 hours in seconds
let timeInSeconds5 = 5 * 60 * 60; // 5 hours in seconds
let interval36, interval5;

function startTimer36() {
    interval36 = setInterval(function() {
        updateTimer('timer36', timeInSeconds36);
        timeInSeconds36--;

        if (timeInSeconds36 < 0) {
            clearInterval(interval36);
            alert("36-Hour Timer finished!");
        }
    }, 1000);
}

function startTimer5() {
    interval5 = setInterval(function() {
        updateTimer('timer5', timeInSeconds5);
        timeInSeconds5--;

        if (timeInSeconds5 % 3600 === 0 && timeInSeconds5 !== 0) {
            playSound('hourl-sound.wav'); // Play hourly sound for 5-hour timer too
        }

        // Play a sound every 2 seconds
        if (timeInSeconds5 % 2 === 0) {
            playSound('second-sound.wav');
        }

        if (timeInSeconds5 < 0) {
            clearInterval(interval5);
            alert("5-Hour Timer finished!");
        }
    }, 1000);
}

function updateTimer(elementId, seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - (hours * 3600)) / 60);
    const secondsLeft = seconds - (hours * 3600) - (minutes * 60);

    document.getElementById(elementId).textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(secondsLeft)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function subtractTime(minutes) {
    timeInSeconds36 -= minutes * 60;
    if (timeInSeconds36 < 0) {
        timeInSeconds36 = 0;
    }
    updateTimer('timer36', timeInSeconds36);
}

function playSound(file) {
    const sound = new Audio(file);
    sound.play();
}

let hasStarted = false;
function startTimers() {
    if (!hasStarted) {
        startTimer36();
        startTimer5();
        hasStarted = true;
    }  
}