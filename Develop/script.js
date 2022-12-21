// Assignment code here
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

//console.log(lowercaseArr);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function randChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword() {
  //console.log("you clicked the button");

  var lowercasePrompt = window.confirm("Set password to contain lowercase letter?");
  var uppercasePrompt = window.confirm("Set password to contain uppercase letter?");
  var numbersPrompt = window.confirm("Set password to contain number?");
  var specialcharPrompt = window.confirm("Would you like your password to contain special characters?");
  var  userPasswordLength = Number(prompt("Chose a password between 8 and 128"))
  while (userPasswordLength < 8 || userPasswordLength > 128) {
    alert("Password length must be between 8 and 128");
    userPasswordLength = Number(prompt("Chose a password between 8 and 128"))
  }


  // if (userPasswordLength >= 8 && userPasswordLength <= 128) {
    for (let index = passwordString.length; index < Number(userPasswordLength); index++) {
      //passwordString += randChar(passwordCharArr);
      if (lowercasePrompt) {
      // passwordCharArr.concat(lowercaseArr);
       passwordString += randChar(lowercaseArr);
     }
     console.log('password string', passwordString);
   
     if (uppercasePrompt) {
      // passwordCharArr.concat(uppercaseArr);
       passwordString += randChar(uppercaseArr);
     }
   
     if (numbersPrompt) {
       //passwordCharArr.concat(numbersArr);
       passwordString += randChar(numbersArr);
     }
   
     if (specialcharPrompt) {
       //passwordCharArr.concat(specialcharArr);
       passwordString += randChar(specialcharArr);
     }
     console.log('password string after', passwordString);
   }  
  //}
  // else {
  //   alert("Password length must be between 8 and 128");
  // }
  
//   for (let index = passwordString.length; index < Number(userPasswordLength); index++) {
//    //passwordString += randChar(passwordCharArr);
//    if (lowercasePrompt) {
//    // passwordCharArr.concat(lowercaseArr);
//     passwordString += randChar(lowercaseArr);
//   }
//   console.log('password string', passwordString);

//   if (uppercasePrompt) {
//    // passwordCharArr.concat(uppercaseArr);
//     passwordString += randChar(uppercaseArr);
//   }

//   if (numbersPrompt) {
//     //passwordCharArr.concat(numbersArr);
//     passwordString += randChar(numbersArr);
//   }

//   if (specialcharPrompt) {
//     //passwordCharArr.concat(specialcharArr);
//     passwordString += randChar(specialcharArr);
//   }
//   console.log('password string after', passwordString);
// }
return passwordString.slice(0,userPasswordLength-passwordString.length);

  //console.log(passwordString);
  //console.log(passwordCharArr);
}
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


