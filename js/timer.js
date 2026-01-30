const timerBlock = document.querySelector(".timer__time");

function addZero(num) {
    return num < 10 ? `0${num}` : num;
}

const updateClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeString = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

    timerBlock.textContent = timeString;
}

setInterval(updateClock, 500)