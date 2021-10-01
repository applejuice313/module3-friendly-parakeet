// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("you clicked the button!");

// 1. prompt the user for password criteria
//    a. password from 8 through 128 characters
  var passwordLength
    passwordLength = prompt("How many characters would you like your password to contain? Please type a value from 8 to 128 characters.");

  if (passwordLength >=8 && passwordLength <=128) {
   console.log("valid input entered");
 }

  else {
    console.log("invalid password length entry");
    prompt("Invalid entry.  Please enter a number from 8 to 128.")
    }


    //    b. lowercase, upercase, numbers, special characters
  var includeLowercase
    includeLowercase = confirm("Click OK to include lowercase characters")

    if (includeLowercase == true) {
      console.log("include lowercase characters")
    }

    else {
      console.log("exclude lowercase characters")
    }




}
// 2. validate input
// 3. generate password


// 4. display password on page
  // return "generated password will go here";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
