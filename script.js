const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds')

let summer = "21 Jun 2023";

function countdown(){
    const summerStart = new Date(summer);
    const currentDate = new Date();

    let secondsLeft = (summerStart-currentDate) / 1000;
    let days = Math.floor(secondsLeft / 3600 / 24);
    let hours = Math.floor(secondsLeft / 3600) % 24;
    let minutes = Math.floor(secondsLeft / 60) % 60;
    let seconds = Math.floor(secondsLeft) %  60;
  

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = twoDigitsFormat(minutes);
    secondsElement.innerHTML = twoDigitsFormat(seconds);
}

function twoDigitsFormat(element) {
    return element< 10 ? (`0${element}`) : element;
}

countdown();

setInterval(countdown, 1000);