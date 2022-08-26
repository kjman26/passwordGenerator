// Assignment Code

// arrays for possible characters
var generateBtn = document.querySelector("#generate");
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','(',')','+','-'];
var possibleChars = "";

//instructions

window.confirm("Password must be 8-128 characters and include a lowercase and uppercase letter, a special character, and/or a number");

// ask for number of characters and store answer in userChars

var passLength = window.prompt("Enter number of characters between 1 - 128");

if(passLength<=128 && passLength>=8){
  alert("That's my favorite number!")
}
else{
  alert("please TRY")
};



console.log(possibleChars+=passLength);


;

// Checking user preferences and adding to possibleChars array if user selects ok

// lower case letter 
var userLower = confirm("Do you want lowercase letters(OK for yes and CANCEL for no)")
  if(userLower == true){
    possibleChars+=lower;
    alert("Smart!")
  }
  else{
    alert("Will not include LOWERCASE letters!")
  };
  console.log(possibleChars);
 
  //upper case option for user
var userUpper = confirm("Do you want uppercase letters?")
  if(userUpper == true){
    possibleChars+=upper;
    alert("Understood!")

  }
  else{
    alert("Will not include UPPERCASE letters")
  };
console.log(possibleChars);

//numbers option for user
var userNum = confirm("Do you want numbers?")
  if(userNum == true){
    possibleChars+=number;
    alert("Even Safer Still!")
  }
  else{
    alert("Will not include NUMBERS")
  };
console.log(possibleChars);

//special character user option

var userSpcl = confirm("Do you want special characters?")
  if(userSpcl == true){
    possibleChars+=special;
    alert("The Safest")
  }
  else{
    alert("Will not include SPECIAL CHARACTERS")
  };
console.log(possibleChars)

// if no identifiers are selected
if(upper === false && lower === false && numbers === false && special === false){
  console.log("Please select at least ONE unique characteristic!")
}

const finalChars = possibleChars(Math.floor(math.random()*possibleChars.length))
// console.log(specialChars);


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





 