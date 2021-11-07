var pwLength = prompt(
  "Please pick a number between 8 and 128 for password length."
);
var pwLower = confirm("Do you want to add lower case characters?");
var pwUpper = confirm("Do you want to add upper case characters?");
var pwNum = confirm("Do you want to add numeric characters?");
var pwSpecial = confirm("Do you want to add special characters?");

var randomChar = {
  getLower,
  getUpper,
  getSpecial,
  getNum,
};

function getLower() {
  var lowerOptions = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var lowerRandom = Math.floor(Math.random() * lowerOptions.length);
  return lowerOptions[lowerRandom];
}
function getUpper() {
  var upperOptions = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var upperRandom = Math.floor(Math.random() * upperOptions.length);
  return upperOptions[upperRandom];
}
function getNum() {
  var numOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var numRandom = Math.floor(Math.random() * numOptions.length);
  return numOptions[numRandom];
}
function getSpecial() {
  var specialOptions = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var specialRandom = Math.floor(Math.random() * specialOptions.length);
  return specialOptions[specialRandom];
}
function countVer(pwLength) {
  if (pwLength >= 8 && pwLength <= 128) {
    return true;
  } else {
    return false;
  }
}

console.log(generateLower());
console.log(generateUpper());
console.log(generateNum());
console.log(generateSpecial());

//Driver function. Check each condition, generate some sort of for loop,

function generatePassword() {}

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
