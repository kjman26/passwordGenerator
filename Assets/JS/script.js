// Assignment Code
// arrays for characters
var generateBtn = document.querySelector("#generate");
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var number = ['0','1','2','3','4','5','6','7','8','9']
var special = ['!','@','#','$','%','^','&','*','(',')','+','-']

//call random char from each


const lowerCase = lower[Math.floor(Math.random() * lower.length)];
for(i=0; i<lower.length; i++);
console.log(lowerCase);

const upperCase = upper[Math.floor(Math.random() * upper.length)];
console.log(upperCase);

const nums = number[Math.floor(Math.random() * number.length)];
console.log(nums);

const specialChars = special[Math.floor(Math.random() * special.length)];
console.log(specialChars);

//concat all chosen characters
const ALL = lowerCase.concat(upperCase, nums, specialChars)
for(i=0; i<ALL; i++);

console.log(ALL);





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





 