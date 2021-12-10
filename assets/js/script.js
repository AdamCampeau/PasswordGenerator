// Assignment code here
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var symbols="!@#$%^&*()_+<>/";
var numbers="1234567890";


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
