
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



  // password from 8 through 128 characters
  function generatePassword() {
    console.log("start generate password function");
  
    
  
  var length;
    
  while (true) {
      length = prompt("How many characters would you like your password to contain? Please type a value from 8 to 128 characters.")
      if (length >=8 && length <=128) {
        console.log("valid password length entered");
        console.log("password length=",(length), "characters");
        
      break;   
    } 
    console.log("invalid password length entered")
    alert("invalid password length entered");
  }
  

  var lower;
    lower = confirm("Click OK to include lowercase characters")

    if (lower == true) {
      function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }
        console.log("include lowercase characters");
      }
    
    else {
      console.log("exclude lowercase characters");

    }

  
  var upper;
    upper = confirm("Click OK to include upercase characters")

    if (upper == true) {
      function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }
      console.log("include upercase characters")
    }

    else {
      console.log("exclude upercase characters")
    }

  var number
    number = confirm("Click OK to include numeric characters")

    if (number == true) {
      function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
      }
      console.log("include numeric characters")
    }

    else {
      console.log("exclude numeric characters")
    }

    var special;
    special = confirm("Click OK to include special characters")

    if (special == true) {
      function getRandomSpecial() {
        const special = '!@#$%^&*()_-=+":;?/.,><';
        return special[Math.floor(Math.random() * special.length)]
      }
      console.log("include special characters")
    }

    else {
      var specialChar = null
      console.log("exclude special characters")
    }

    
    let generatePassword = '';

    const typesCount = lower + upper + number + special;
    console.log('typesCount: ', typesCount);

    const typesArray = [{ lower }, { upper }, { number }, { special }, { length }]
    console.log('typesArray: ', typesArray);

  const randomizerFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    special: getRandomSpecial
  }
  
}




// validate input- confirm at least one character type was selected and inform user


// generate the password based on the user-specified parameters



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
