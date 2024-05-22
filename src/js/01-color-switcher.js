const background = document.querySelector('body');
const startBttn = document.querySelector('[data-start]');
const stopBttn = document.querySelector('[data-stop]');
let timerId = null;


startBttn.addEventListener("click", () => {
    timerId = setInterval(() => {
      background.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

stopBttn.addEventListener("click", () => {
    clearInterval(timerId);
  });

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
