//hit btn prompt how many chars

//if less than 8 or more than 128 alert

// if between 8 and 128 confirm lowercase 

//confirm upercase
//confirm numeric
//confirm special chars

//if yes add to array

//print password to screen

//////////////////////////////////////////////////

// Number array lower
const lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Number array Upper
const tallLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//Numeric array
const numbers = [1,2,3,4,5,6,7,8,9,0]

//Special charecters array
const special = ["!", "#", "$", "%", "&","*", "?", "@", "^"];

var confirmlowLetter;
var confirmtallletter;
var confirmnumbers;
var confirmspecial;


// if (passOBj.count >=8 || passObj.count <= 128) {
//   alert("Would you like Lower case Letters in your password?")
let passOBj = [""]
let password = [""]

//function generate password
function generatePassword (){
   //hit btn prompt how many chars
const passOBj =prompt("How many charecters long would you like your password?");
console.log(passOBj);
console.log(typeof passOBj);

// gather input value
 if  (parseInt(passOBj) < 8 || parseInt(passOBj) > 128){
    alert ("That number is not between 8 and 128. Please enter a correct number")
} else {
  // All the confirms
   confirmlowLetter = confirm("Would you like Lower case Letters in your password?")

   
   confirmtallletter = confirm("Would you like Upper case letters in your password?")
   confirmnumbers = confirm("Would you like Numbers in your password?")
   confirmspecial = confirm("Would you like Special charecters in your password?")
}
}


 


 
// if want caps then concat caps to password


//console log password to confirm



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
