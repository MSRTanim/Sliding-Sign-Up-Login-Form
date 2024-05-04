const container = document.getElementById('container');
const signUpBtn = document.getElementById('sign-up');
const loginBtn = document.getElementById('login');

signUpBtn.addEventListener('click', () => {
   container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
   container.classList.remove('active');
});
