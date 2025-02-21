const login = document.getElementById('box-login');
const register = document.getElementById('box-register');
const boxContainer = document.getElementById('box-container');
document.getElementById('register-link').addEventListener('click', () => {
  boxContainer.classList.add('active');
});
document.getElementById('login-link').addEventListener('click', () => {
  boxContainer.classList.remove('active');
});
document.getElementById('btn-x').addEventListener('click', () => {
  boxContainer.classList.remove('active');
  boxContainer.classList.add('hidden');
});
document.getElementById('btn-login').addEventListener('click', () => {
  boxContainer.classList.remove('hidden');
});
