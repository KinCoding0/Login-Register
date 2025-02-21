// const login = document.getElementById('box-login');
// const register = document.getElementById('box-register');
const boxContainer = document.getElementById('box-container');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const error = document.querySelectorAll('#error');
const inputValue = document.querySelectorAll('input');
document.getElementById('register-link').addEventListener('click', () => {
  boxContainer.classList.add('active');
});
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

document.querySelectorAll('input').forEach(input => {
  function checkValue() {
    if (input.value.trim() !== '') {
      input.nextElementSibling.classList.add('active');
    } else {
      input.nextElementSibling.classList.remove('active');
    }
  }

  input.addEventListener('input', checkValue);
});

function showError(text) {
  error.forEach(element => {
    element.innerHTML = text;
  });
}
document.getElementById('box-register').addEventListener('submit', e => {
  e.preventDefault();
  if (password.value.trim() !== confirmPassword.value.trim()) {
    showError('Password not match.');
  } else {
    alert('Submit access');
  }
});
