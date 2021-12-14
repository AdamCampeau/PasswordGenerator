// Assignment code here
var passwordText='';

const passwordCharSet = {
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  symbols: ["!","@","#","$","%","^","&","*","(",")","_","+","<",">","/","?"],
  numbers: ["1","2","3","4","5","6","7","8","9","0"],
};

var uppercasePrompt=confirm ('Would you like to user upper case characters?');
var lowercasePrompt=confirm ('Would you like to use lower case characters?');
var symbolsPrompt=confirm ('Would you like to include symbols?');
var numbersPrompt=confirm ('Would you like to include numbers?');
var lengthPrompt= prompt ('Please select a valid password length, must be between 8 - 128 characters')

//if prompt is true,
if (uppercasePrompt === true) {
  passwordCharSet.uppercase + passwordText
}

if (lowercasePrompt === true) {
  passwordCharSet.lowercase + passwordText
}

if (symbolsPrompt === true) {
  passwordCharSet.symbols + passwordText
}

if (numbersPrompt === true) {
  passwordCharSet.numbers + passwordText
}

// input from prompt sets length of password
let lengthPrompt=passwordText.length;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
