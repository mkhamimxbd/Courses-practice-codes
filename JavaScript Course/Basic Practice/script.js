const a = document.getElementById('a');

const user = {
  name: 'smith',
  password: 'smith1234'
};

a.textContent = `Name: ${user.name} | Password: ${user.password}`;

console.log(user);