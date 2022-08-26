// Assignment Code

// arrays for possible characters
var generateBtn = document.querySelector("#generate");
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var number = ['0','1','2','3','4','5','6','7','8','9']
var special = ['!','@','#','$','%','^','&','*','(',')','+','-']

//instructions

window.confirm("Password must be 8-128 characters and include a lowercase and uppercase letter, a special character, and/or a number");

// ask for number of characters and store answer in userChars

var userChars = window.prompt("Enter number of characters between 1 - 128");

if(userChars<=128 && userChars>=8){
  alert("That's my favorite number!")
}
else{
  alert("please TRY")
};
console.log(userChars);


// lower case letter 
var userLower = confirm("Do you want lowercase letters(OK for yes and CANCEL for no)")
  if(userLower == true){
    alert("Smart!")
  }
  else{
    alert("Will not include LOWERCASE letters!")
  };
  console.log(userLower);
 
  //upper case option for user
var userUpper = confirm("Do you want uppercase letters?")
  if(userUpper == true){
    alert("Understood!")
  }
  else{
    alert("Will not include UPPERCASE letters")
  };
console.log(userUpper);

//numbers option for user
var userNum = confirm("Do you want numbers?")
  if(userNum == true){
    alert("Even Safer Still!")
  }
  else{
    alert("Will not include NUMBERS")
  };
console.log(userNum);

//special character user option

var userSpcl = confirm("Do you want special characters?")
  if(userSpcl == true){
    alert("The Safest")
  }
  else{
    alert("Will not include SPECIAL CHARACTERS")
  };
console.log(userSpcl)
//call random char from each

const lowerCase = lower[Math.floor(Math.random() * lower.length)];
for(i=0; i<lower.length; i++);
// console.log(lowerCase);

const upperCase = upper[Math.floor(Math.random() * upper.length)];
// console.log(upperCase);

const nums = number[Math.floor(Math.random() * number.length)];
// console.log(nums);

const specialChars = special[Math.floor(Math.random() * special.length)];
// console.log(specialChars);

//concat all chosen characters

const ALL = lowerCase.concat(upperCase, nums, specialChars)
for(i=0; i<ALL; i++);

console.log(ALL);

//ifs! contains a special, else; contains a number, else, contains an upper, else; contains lower,else

//TODO: check if .INCLUDES
function generatePassword(){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





 