const timerBlock = document.querySelector(".timer__time");
const deadline = "31 march 2026";
let updateRemainingInterval;

function addZero(num) {
    return num < 10 ? `0${num}` : num;
}

const getRemaining = (deadline) => {
    const currentDateMs = new Date().getTime();
    const deadlineDateMs = new Date(deadline).getTime();
    const totalSecondsRemaining = Math.floor((deadlineDateMs - currentDateMs) / 1000);
    if (totalSecondsRemaining < 0) {
        clearInterval(updateRemainingInterval)
        return '00:00:00'
    }
    const hoursRemaining = Math.floor(totalSecondsRemaining / 60 / 60);
    const minutesRemaining = Math.floor(totalSecondsRemaining / 60) - hoursRemaining * 60;
    const secondsRemaining = totalSecondsRemaining - hoursRemaining * 60 * 60 - minutesRemaining * 60;
    return `${addZero(hoursRemaining)}:${addZero(minutesRemaining)}:${addZero(secondsRemaining)}`
}

const updateClock = () => timerBlock.textContent = getRemaining(deadline);

updateRemainingInterval = setInterval(updateClock, 500);