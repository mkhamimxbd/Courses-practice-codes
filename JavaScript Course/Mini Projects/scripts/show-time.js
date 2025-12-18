import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

function showTime() {
  const time = dayjs().format('HH:mm:ss');
  return time;
}

setInterval(() => {
  document.querySelector('.js-time')
    .innerHTML = showTime();
}, 300);