/* var pwLength = prompt(
  "Please pick a number between 8 and 128 for password length."
); */

var random = {
  lower: getLower,
  upper: getUpper,
  number: getNum,
  special: getSpecial,
};

var pwLength = function () {
  var userInput = prompt(
    "Please pick a number between 8 and 128 for password length."
  );
  console.log(userInput);
  if (userInput < 8 || userInput > 128) {
    pwLength();
  } else {
    return userInput;
  }
};

pwLength();

function getLower() {
  if (pwLower == true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  } else {
    return false;
  }
}
function getUpper() {
  if (pwUpper == true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  } else {
    return false;
  }
}
function getNum() {
  if (pwNum == true) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  } else {
    return false;
  }
}
function getSpecial() {
  if (pwSpecial == true) {
    var symbols = "!@#$%^&*()[]{}=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  } else {
    return false;
  }
}

var pwLower = confirm("Do you want to add lower case characters?");

var pwUpper = confirm("Do you want to add upper case characters?");

var pwNum = confirm("Do you want to add numeric characters?");

var pwSpecial = confirm("Do you want to add special characters?");

console.log(getLower());
console.log(getUpper());
console.log(getNum());
console.log(getSpecial());

getLower();

/* var pwUpper = confirm("Do you want to add upper case characters?");

var pwNum = confirm("Do you want to add numeric characters?");

var pwSpecial = confirm("Do you want to add special characters?"); */

//Start pw generation, filter out checked & unchecked regarding upper/lower/number/special.
//Loop over length for each function that was checked
//Adds final password after doing all of this

/* 
function generatePassword(lower, upper, number, special, length) {
  let generatePassword = "";

  const typeCount = lower + upper + number + special;
  console.log(typeCount);

  const typeArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (typeArray) => Object.values(typeArray)[0]
  );

  console.log(typeArray);
}

console.log(generatePassword()); */

//Driver function. Check each condition, generate some sort of for loop,

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//create generate password function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//use length of the array, in the same way math.random on the array of get lower, get num, get special. Use
