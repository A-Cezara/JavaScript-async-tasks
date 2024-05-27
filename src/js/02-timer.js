import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBttn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
const dateInput = document.querySelector("#datetime-picker");

let selectedDate;
let timerInterval;

startBttn.disabled = true;

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onChange(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            dateInput.value = "";
        } else {
            selectedDate = selectedDates[0];
            startBttn.disabled = false;
        }
    },
};

function startTimer() {
    timerInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const endTime = selectedDate.getTime();
        const timeDiff = endTime - currentTime;

        if (timeDiff <= 0) {
            clearInterval(timerInterval);
            daysSpan.textContent = "00";
            hoursSpan.textContent = "00";
            minutesSpan.textContent = "00";
            secondsSpan.textContent = "00";
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(timeDiff);

        daysSpan.textContent = days;
        hoursSpan.textContent = addLeadingZero(hours);
        minutesSpan.textContent = addLeadingZero(minutes);
        secondsSpan.textContent = addLeadingZero(seconds);
    }, 1000);
}

startBttn.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    startTimer();
});

dateInput.value = ""; 

flatpickr("#datetime-picker", options);