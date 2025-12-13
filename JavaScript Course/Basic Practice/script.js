const myNameLogger = () => {
  console.log('M. K. Hamim');
};

myNameLogger();

const oneAdder = num => {
  console.log(num + 1);
};

oneAdder(3);

const addFive = num => num + 5;

console.log(addFive(10));

[
  'Hamim',
  'Muti',
  'Mohan',
  'Rudy'
].forEach((name, index) => console.log(`${name} is number ${index}`))

const gameMoves = {
  up() {
    console.log('Moving Up...');
  },

  left() {
    console.log('Moving Left...');
  },

  right() {
    console.log('Moving Right...');
  },

  down() {
    console.log('Moving Down...');
  }
};

gameMoves.up();
gameMoves.left();
gameMoves.right();
gameMoves.down();

const button = document.querySelector('.js-button');
const buttonLogged = () => {
  console.log('Button clicked!');
}

button.addEventListener('click', buttonLogged);

// button.removeEventListener('click', buttonLogged);

button.addEventListener('click', () => {
  console.log('Button clicked! Again!')
});

console.log([ 1, -2, 3].filter(value => value >= 0));

console.log([1, 1, 3].map(value => value * 2));