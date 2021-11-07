// Assigning DOM elements 
//
// can use const when a value doesn't change
// i.e constant array, object
// const declerations are hoisted
// let and const have replaced var
// I mostly used var in this example
// let variables can be redeclared

var resultDOM = document.getElementById('result');
var copybtnDOM = document.getElementById('copy');
var lengthDOM = document.getElementById('length');
var uppercaseDOM = document.getElementById('uppercase');
var numbersDOM = document.getElementById('numbers');
var symbolsDOM = document.getElementById('symbols');
var generatebtn = document.getElementById('generate');
var form = document.getElementById('generatorForm');

// Generating Character Codes
// ASCI characters used for array

// ASCI character table:
// 65: A  -  90: Z
// 97: a  -  122:z
// 48: 0  -  57: 9
// 33: !  -  47: /
// 58: :  -  64: @
// 91: [  -  96: `
// 123: { -  126: ~

var UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
var LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
var NUMBER_CODES = arrayFromLowToHigh(48, 57);
var SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// Copy Password from text area
copybtnDOM.addEventListener('click', () => {
  var textarea = document.createElement('textarea');
  var passwordToCopy = resultDOM.innerText;

  // if there is no password to copy, return
  if (!passwordToCopy) return;

  // copy the set text area
  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password has been Copied');
});

// Checking the options that are selected and setting the password
// prevents browser default
// variables hold the DOM elements 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  var characterAmount = lengthDOM.value;
  var includeUppercase = uppercaseDOM.checked;
  var includeNumbers = numbersDOM.checked;
  var includeSymbols = symbolsDOM.checked;
  var password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  resultDOM.innerText = password;
});

// generates password via generatePassword
var generatePassword = (
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  var charCodes = LOWERCASE_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  var passwordCharacters = [];
  for (var i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
};

// Character Code Generating Function
function arrayFromLowToHigh(low, high) {
  var array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}