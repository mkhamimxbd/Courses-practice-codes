const rollBtn = document.querySelector('.js-roll-btn');
const diceImageDiv = document.querySelector('.js-dice-image-div');

let diceHTML;
let diceNumber;

function roll() {
  diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  diceHTML = `
    <img class="dice-img js-dice-img" src="assets/dice-${diceNumber}.svg">
  `;

  diceImageDiv.innerHTML = diceHTML;
}

rollBtn.addEventListener('click', roll);