const passwordElement = document.getElementById('password');
const lengthTextElement = document.getElementById('length-text');
const rangeElement = document.getElementById('range');
const buttonGenerateElement = document.getElementById('generate-password');

const uppercaseInputElement = document.getElementById('uppercase');
const lowercaseInputElement = document.getElementById('lowercase');
const numbersInputElement = document.getElementById('numbers');
const symbolsInputElement = document.getElementById('symbols');

let allowedCharacters = '';

const passwordOptions = {
  lowercase: 'abcdefghijklmnñopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
  numbers: '1234567890',
  symbols: '+-.,!"·$%&/()=?{}',
  passwordLength: rangeElement.value
};

lengthTextElement.textContent = passwordOptions.passwordLength;

const setPasswordLenght = event => {
  passwordOptions.passwordLength = event.target.value;
  lengthTextElement.textContent = passwordOptions.passwordLength;
};

const printPassword = password => {
  passwordElement.value = password;
};

const setDisabledButton = () => {
  buttonGenerateElement.disabled = !allowedCharacters.length;
};

const checkPasswordOptions = () => {
  allowedCharacters = '';
  const allCheckbox = document.querySelectorAll("input[type='checkbox']:checked");
  allCheckbox.forEach(checkbox => {
    allowedCharacters += passwordOptions[checkbox.id];
  });

  setDisabledButton();
};

const generatePassword = () => {
  let newPassword = '';
  let newPasswordLength = passwordOptions.passwordLength;

  for (let index = 0; index < newPasswordLength; index++) {
    const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
    const randomCharacter = allowedCharacters.charAt(randomNumber);
    newPassword += randomCharacter;
  }

  printPassword(newPassword);
};

rangeElement.addEventListener('input', setPasswordLenght);

buttonGenerateElement.addEventListener('click', generatePassword);

uppercaseInputElement.addEventListener('click', checkPasswordOptions);
lowercaseInputElement.addEventListener('click', checkPasswordOptions);
numbersInputElement.addEventListener('click', checkPasswordOptions);
symbolsInputElement.addEventListener('click', checkPasswordOptions);
