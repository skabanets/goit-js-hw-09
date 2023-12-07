import Notiflix from 'notiflix';

refs = {
  form: document.querySelector('.form'),
  inputsValue: document.querySelectorAll('input'),
};

const createPromise = (position, delay) => {
  const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promis;
};

const getFormData = () => {
  const formData = new Object();
  refs.inputsValue.forEach(({ name, value }) => {
    formData[name] = +value;
  });
  return formData;
};

const onFormSubmit = e => {
  e.preventDefault();

  const data = getFormData();

  let { delay, step, amount } = data;

  for (i = 1; i <= amount; i++) {
    const promis = createPromise(i, delay);

    promis
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
};

refs.form.addEventListener('submit', onFormSubmit);
