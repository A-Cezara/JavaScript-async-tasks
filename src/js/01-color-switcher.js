const background = document.querySelector('body');
const startBttn = document.querySelector('[data-start]');
const stopBttn = document.querySelector('[data-stop]');
let timerId = null;


startBttn.addEventListener("click", () => {
  startBttn.disabled = true;
    timerId = setInterval(() => {
      background.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

stopBttn.addEventListener("click", () => {
    clearInterval(timerId);
    startBttn.disabled = false;
  });

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
