const p = document.getElementById('p');

let user = {
  name: 'Jhon',
  password: 'pass1111',
  premium: true
};

let premiumUserStatus = '';

if (user.premium) {
  premiumUserStatus = 'You are a Premuim user.';
} else if (!user.premium) {
  premiumUserStatus = 'You are not a Premuim user.';
}

console.log(`Welcome back, ${user.name}! Your password is ${user.password}. ${premiumUserStatus}`)

p.textContent = `Welcome back, ${user.name}! Your password is ${user.password}. ${premiumUserStatus}`