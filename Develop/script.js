// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// 1. prompt the user for password criteria
//  a. password from 8 through 128 characters
  function generatePassword() {
    console.log("start generate password function");

  // 1. prompt the user for password criteria
  //    a. password from 8 through 128 characters

  var passwordLength;
    
  while (true) {
      passwordLength = prompt("How many characters would you like your password to contain? Please type a value from 8 to 128 characters.")
      if (passwordLength >=8 && passwordLength <=128) {
        console.log("valid password length entered");
      break;  
    } 
    console.log("invalid password length entered")
    alert("invalid password length entered");
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

  var includeUpercase
    includeUpercase = confirm("Click OK to include upercase characters")

    if (includeUpercase == true) {
      console.log("include upercase characters")
    }

    else {
      console.log("exclude upercase characters")
    }

  var includeNumeric
    includeNumeric = confirm("Click OK to include numeric characters")

    if (includeNumeric == true) {
      console.log("include numeric characters")
    }

    else {
      console.log("exclude numeric characters")
    }

    var includeSpecial
    includeSpecial = confirm("Click OK to include special characters")

    if (includeSpecial == true) {
      console.log("include special characters")
    }

    else {
      console.log("exclude special characters")
    }


  }
// 2. validate input- confirm at least one character type was selected and inform user
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
