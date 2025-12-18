import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


function showDate(days) {
  const daysLater = dayjs().add(days, 'day').format('MMMM DD');
  return daysLater;
}



document.querySelector('.js-date')
  .innerHTML = showDate(2);



