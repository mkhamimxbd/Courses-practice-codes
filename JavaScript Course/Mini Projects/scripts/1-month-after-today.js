import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

document.querySelector('.js-date')
  .innerHTML = dayjs().add(1, 'month').format('MMMM DD')