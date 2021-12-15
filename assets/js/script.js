// Assignment code here
function generatePassword() {
  var password='';
  var characters = '';
  
  const passwordCharSet = {
    uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    symbols: ["!","@","#","$","%","^","&","*","(",")","_","+","<",">","/","?"],
    numbers: ["1","2","3","4","5","6","7","8","9","0"],
  };
  
  var lengthPrompt= prompt ('Please select a valid password length, must be between 8 - 128 characters')
  while (lengthPrompt < 8 || lengthPrompt > 128) {
    alert('Your password must be a number between 8 and 128 characters')
    lengthPrompt= prompt ('Please select a valid password length, must be between 8 - 128 characters')
  }

  var uppercasePrompt=confirm ('Would you like to user upper case characters?');
  var lowercasePrompt=confirm ('Would you like to use lower case characters?');
  var symbolsPrompt=confirm ('Would you like to include symbols?');
  var numbersPrompt=confirm ('Would you like to include numbers?');

  while(uppercasePrompt === false && lowercasePrompt === false && symbolsPrompt === false && numbersPrompt === false) {
    alert("You must choose at least one character type")
    uppercasePrompt=confirm ('Would you like to user upper case characters?');
    lowercasePrompt=confirm ('Would you like to use lower case characters?');
    symbolsPrompt=confirm ('Would you like to include symbols?');
    numbersPrompt=confirm ('Would you like to include numbers?');
  }
  
  //if prompt is true,
  if (uppercasePrompt === true) {
    characters += passwordCharSet.uppercase.join('')
  }
  
  if (lowercasePrompt === true) {
    characters += passwordCharSet.lowercase.join('')
  }
  
  if (symbolsPrompt === true) {
    characters += passwordCharSet.symbols.join('')
  }
  
  if (numbersPrompt === true) {
    characters += passwordCharSet.numbers.join('')
  }

  for (var i = 0; i < lengthPrompt; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
  }

 return password
  
}

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
