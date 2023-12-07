const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let timerId = null;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeBackgroundColor = () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
};

const onButtonStartClick = () => {
  refs.btnStart.setAttribute('disabled', '');
  refs.btnStop.removeAttribute('disabled');
  timerId = setInterval(changeBackgroundColor, 1000);
};

const onButtonStopClick = () => {
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', '');
  clearInterval(timerId);
};

refs.btnStart.addEventListener('click', onButtonStartClick);
refs.btnStop.addEventListener('click', onButtonStopClick);
