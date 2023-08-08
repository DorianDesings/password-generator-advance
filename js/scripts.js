const passwordElement = document.getElementById('password');
const lengthTextElement = document.getElementById('length-text');
const rangeElement = document.getElementById('range');
const buttonGenerateElement = document.getElementById('generate-password');

const allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

let passwordLength = 16;

const generateRandomNumber = () => {
  return Math.floor(Math.random() * allowedCharacters.length);
};

const generatePassword = () => {
  let newPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = generateRandomNumber();
    newPassword += allowedCharacters[randomNumber];
  }
  return newPassword;
};

const printPassword = () => {
  passwordElement.value = generatePassword();
};

const setPasswordLength = event => {
  passwordLength = event.target.value;
  lengthTextElement.textContent = passwordLength;
};

rangeElement.addEventListener('input', setPasswordLength);

buttonGenerateElement.addEventListener('click', printPassword);
