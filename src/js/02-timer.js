import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  timerValues: document.querySelectorAll('.value'),
};

let targetDate = null;
let timerId = null;
let isActiveTimer = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] - new Date() <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      targetDate = null;
      return;
    }

    refs.startBtn.removeAttribute('disabled');
    targetDate = selectedDates[0];
  },

  onChange() {
    clearInterval(timerId);
    isActiveTimer = false;
    refs.startBtn.setAttribute('disabled', '');
    refs.timerValues.forEach(elemnt => (elemnt.textContent = '00'));
  },
};

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const loadTimer = () => {
  isActiveTimer = true;
  const currentTime = targetDate - new Date();
  const timer = convertMs(currentTime);
  Object.entries(timer).forEach(([key, value], index) => {
    refs.timerValues[index].textContent = String(value).padStart(2, 0);
  });
};

const onStartTimerClick = () => {
  if (isActiveTimer) return;
  timerId = setInterval(loadTimer, 1000);
};

refs.startBtn.addEventListener('click', onStartTimerClick);

flatpickr('#datetime-picker', options);
