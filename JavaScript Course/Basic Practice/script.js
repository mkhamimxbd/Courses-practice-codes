const p = document.getElementById('p');

let username = [
  'smith'
];

let user = {
  smith: {
    roomNumber: 482,
    roomType: 'Premium',
    ac: true
  }
};


if (user.ac) {
  user.ac = 'AC';
} else if (!user.ac) {
  user.ac = 'non-AC';
}

console.log(
  `Welcome ${user[username[0]].name}! Your room number is ${user[username[0]].roomNumber}. You booked a ${user[username[0]].roomType} ${user[username[0]].ac} room.`
);
