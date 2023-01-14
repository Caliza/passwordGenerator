// Intiates variables and arrays to be passed through password
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "1234567890";
var specialchar = '!@#$%^&*()_+=?></';
var lowercaseArr = lowercase.split('');
var uppercaseArr = uppercase.split('');
var numbersArr = numbers.split('');
var specialcharArr = specialchar.split('');
var passwordString = '';
var passwordCharArr = [];

// Set array to generate random number
var generateBtn = document.querySelector("#generate");
// Randomly selcts item from array
function randChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Concatanates old Array into new array ("expands")
function expandArr(originalArr, extendArr) {
  return originalArr.concat(extendArr)
}
//Prompts asking user for selected characters to be used in password.
function generatePassword() {
  var lowercasePrompt = window.confirm("Set password to contain lowercase letter?");
  var uppercasePrompt = window.confirm("Set password to contain uppercase letter?");
  var numbersPrompt = window.confirm("Set password to contain number?");
  var specialcharPrompt = window.confirm("Would you like your password to contain special characters?");
  var userPasswordLength = Number(prompt("Chose a password between 8 and 128"))

  //While loop used to verify that user sets password within given range.
  while (userPasswordLength < 8 || userPasswordLength > 128) {
    alert("Password length must be between 8 and 128");
    userPasswordLength = Number(prompt("Chose a password between 8 and 128"))
  }
  if (lowercasePrompt) {
    passwordCharArr = expandArr(passwordCharArr, lowercaseArr);
  }
  if (uppercasePrompt) {
    passwordCharArr = expandArr(passwordCharArr, uppercaseArr);
  }

  if (numbersPrompt) {
    passwordCharArr = expandArr(passwordCharArr, numbersArr);
  }

  if (specialcharPrompt) {
    passwordCharArr = expandArr(passwordCharArr, specialcharArr);
  }
  if (passwordCharArr.length === 0) {
    alert("You must select one character type")
    return ""
  }
  console.log('password string after', passwordCharArr);
  for (let index = 0; index < Number(userPasswordLength); index++) {
    passwordString += randChar(passwordCharArr)
  }
  //Returns password to given length set by user.
  // return passwordString.slice(0, userPasswordLength - passwordString.length);
  return passwordString
}
//Passes seleceted criteria by user into passwordString.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


