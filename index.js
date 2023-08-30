const secondsElement = document.querySelector('.seconds');
const minutesElement = document.querySelector('.minutes');
const hoursElement = document.querySelector('.hours');

const startResetButtonElement = document.querySelector('.start-reset');
const pauseButtonElement = document.querySelector('.pause');


let seconds = 0;
let minutes = 0;
let hours = 0;
let runningTime;
let isRunning = false;
let pauseIsOn = false;

const secondsFunction = () => {
    if (seconds < 59) {
        seconds++;
    } else {
        seconds = 0;
        minutesFunction();
    }
    // seconds display
    if (seconds < 10) {
        secondsElement.textContent = `0${seconds}`;
    } else {
        secondsElement.textContent = seconds;
    }
}

const minutesFunction = () => {
    if (minutes < 59) {
        minutes++
    } else {
        minutes = 0;
        hoursFunction();
    };
    // minutes display
    if (minutes < 10) {
        minutesElement.textContent = `0${minutes}`;
    } else {
        minutesElement.textContent = minutes;
    }
}

const hoursFunction = () => {
    if (hours < 23) {
        hours++
    } else {
        hours = 0;
    }
    // hours display
    if (hours < 10) {
        hoursElement.textContent = `0${hours}`;
    } else {
        hoursElement.textContent = hours;
    }
}

startResetButtonElement.addEventListener('click', () => {
    if (isRunning === false) {
        runningTime = setInterval(secondsFunction, 1000);
        isRunning = true;
    } else {
        clearInterval(runningTime);
        seconds = 0;
        minutes = 0;
        hours = 0;
        secondsElement.textContent = `00`;
        minutesElement.textContent = `00`;
        hoursElement.textContent = `00`;
        isRunning = false;
        pauseIsOn = false;
    }

});


pauseButtonElement.addEventListener('click', () => {
    if (isRunning === true && pauseIsOn === false) {
        clearInterval(runningTime);
        pauseIsOn = true;
        pauseButtonElement.classList.add('pause-on');

    } else if (isRunning === true && pauseIsOn === true) {
        runningTime = setInterval(secondsFunction, 1000);
        pauseIsOn = false;
        pauseButtonElement.classList.remove('pause-on');
    }
});



