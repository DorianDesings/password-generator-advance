const passwordElement = document.getElementById('password');
const lengthTextElement = document.getElementById('length-text');
const rangeElement = document.getElementById('range');
const buttonGenerateElement = document.getElementById('generate-password');

const uppercaseInputElement = document.getElementById('uppercase-input');
const lowercaseInputElement = document.getElementById('lowercase-input');
const numbersInputElement = document.getElementById('numbers-input');
const symbolsInputElement = document.getElementById('symbols-input');

/* 
id a cada checkbox
un if por cada checkbox
------------------------
*/

const lowercaseCharacters = 'abcdefghijklmnñopqrstuvwxyz';
const uppercasCharacters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const numbersCharacters = '1234567890';
const symbolsCharacters = '+-.,!"·$%&/()=?{}';

let allowedCharacters = '';

// const allowedCharacters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890+-.,!"·$%&/()=?{}';

let passwordLength = rangeElement.value;

lengthTextElement.textContent = passwordLength;

const setPasswordLenght = event => {
  passwordLength = event.target.value;
  lengthTextElement.textContent = passwordLength;
};

const printPassword = password => {
  passwordElement.value = password;
};

const setDisabledButton = () => {
  if (allowedCharacters.length) buttonGenerateElement.disabled = false;
  else buttonGenerateElement.disabled = true;
};

const checkPasswordOptions = () => {
  allowedCharacters = '';
  if (lowercaseInputElement.checked) {
    allowedCharacters += lowercaseCharacters;
  }
  if (uppercaseInputElement.checked) {
    allowedCharacters += uppercasCharacters;
  }
  if (numbersInputElement.checked) {
    allowedCharacters += numbersCharacters;
  }
  if (symbolsInputElement.checked) {
    allowedCharacters += symbolsCharacters;
  }

  setDisabledButton();
};

const generatePassword = () => {
  let newPassword = '';
  let newPasswordLength = passwordLength;

  if (lowercaseInputElement.checked) {
    const randomNumber = Math.floor(Math.random() * lowercaseCharacters.length);
    newPassword += lowercaseCharacters.charAt(randomNumber);
    newPasswordLength--;
  }

  if (uppercaseInputElement.checked) {
    const randomNumber = Math.floor(Math.random() * uppercasCharacters.length);
    newPassword += uppercasCharacters.charAt(randomNumber);
    newPasswordLength--;
  }

  if (numbersInputElement.checked) {
    const randomNumber = Math.floor(Math.random() * numbersCharacters.length);
    newPassword += numbersCharacters.charAt(randomNumber);
    newPasswordLength--;
  }

  if (symbolsInputElement.checked) {
    const randomNumber = Math.floor(Math.random() * symbolsCharacters.length);
    newPassword += symbolsCharacters.charAt(randomNumber);
    newPasswordLength--;
  }

  for (let index = 0; index < newPasswordLength; index++) {
    const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
    const randomCharacter = allowedCharacters.charAt(randomNumber);
    newPassword += randomCharacter;
  }

  newPassword = newPassword
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  printPassword(newPassword);
};

rangeElement.addEventListener('input', setPasswordLenght);

buttonGenerateElement.addEventListener('click', generatePassword);

uppercaseInputElement.addEventListener('click', checkPasswordOptions);
lowercaseInputElement.addEventListener('click', checkPasswordOptions);
numbersInputElement.addEventListener('click', checkPasswordOptions);
symbolsInputElement.addEventListener('click', checkPasswordOptions);
