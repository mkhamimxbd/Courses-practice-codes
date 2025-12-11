const nameArray = [
  'hamim',
  'muti',
  'rudi',
  'mohan'
];

nameArray.forEach(function(value, index) {
  if (value === 'muti') {
    return;
  }

  console.log(value);
});