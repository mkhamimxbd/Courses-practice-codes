const a = document.getElementById('a');

const user = {
  name: 'Hamim',
  password: 'smith1234',
  operationgSystem: 'Windows 11' 
};

console.log(user);

user.status = 'online';

console.log(user);

delete user.operationgSystem;

console.log(user);

console.log(typeof user.name);
