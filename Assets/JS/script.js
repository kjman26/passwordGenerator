// Assignment Code

// arrays for possible characters
var generateBtn = document.querySelector("#generate");

var possibleChars = "";
var passLength;
var password="";
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const special = " #!/$%&'()*+,-.:;<=>?@][^_`{|}~";



// ask for number of characters and store answer in userChars

function generatePassword() {

  window.confirm("Password must be 8-128 characters and include a lowercase and uppercase letter, a special character, and/or a number");

  var passLength = window.prompt("Enter number of characters between 1 - 128");

  // choose pass length, if cancel selected then prompts will end

  if (passLength <= 128 && passLength >= 8) {
    alert("That's my favorite number!")
  }
  else {
    alert("please TRY")
    return ("-------------------")
  };
console.log(passLength)
  // Checking user preferences and adding to possibleChars array if user selects ok

  // lower case letter 
  var userLower = confirm("Do you want lowercase letters(OK for yes and CANCEL for no)")
  if (userLower == true) {
    possibleChars += lower;
    alert("Smart!")
  }
  else {
    alert("Will not include LOWERCASE letters!")
  };
  console.log(possibleChars);

  //upper case option for user
  var userUpper = confirm("Do you want uppercase letters?")
  if (userUpper == true) {
    possibleChars += upper;
    alert("Understood!")

  }
  else {
    alert("Will not include UPPERCASE letters")
  };
  console.log(possibleChars);

  //numbers option for user
  var userNum = confirm("Do you want numbers?")
  if (userNum == true) {
    possibleChars += number;
    alert("Even Safer Still!")
  }
  else {
    alert("Will not include NUMBERS")
  };
  console.log(possibleChars);

  //special character user option

  var userSpcl = confirm("Do you want special characters?")
  if (userSpcl == true) {
    possibleChars += special;
    alert("The Safest")
  }
  else {
    alert("Will not include SPECIAL CHARACTERS")
  };
  
  // if no identifiers are selected
  if (userUpper === false && userLower === false && userNum === false && userSpcl === false) {
    alert("Please select at least ONE unique characteristic!")
  };

  //build the password with possibleChars randomly
console.log(possibleChars)
if(possibleChars){
  for (i = 0; i <= passLength; i++) {
    const finalChars = possibleChars[Math.floor(Math.random()*possibleChars.length)];
    password = password + finalChars; 
  };
 }
console.log(password)
  return password;

};

var generateBtn = document.querySelector("#generate")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





