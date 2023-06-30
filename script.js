//hit btn prompt how many chars

//if less than 8 or more than 128 alert

// if between 8 and 128 confirm lowercase 

//confirm upercase
//confirm numeric
//confirm special chars

//if yes add to array

//print password to screen

//////////////////////////////////////////////////

//  lower case array
const lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//uppere case array
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
let password = []

//function generate password
function generatePassword (){
   //hit btn prompt how many chars
let passOBj =parseInt (prompt("How many charecters long would you like your password?"));
console.log(passOBj);
console.log(typeof passOBj);

// gather input value
 if  ((passOBj) < 8 || (passOBj) > 128){
    alert ("That number is not between 8 and 128. Please enter a correct number");
} else {
  // All the confirms
   confirmlowLetter = confirm("Would you like Lower case Letters in your password?");

   
   confirmtallletter = confirm("Would you like Upper case letters in your password?");
   confirmnumbers = confirm("Would you like Numbers in your password?");
   confirmspecial = confirm("Would you like Special charecters in your password?");

   

if(confirmlowLetter){
  password = password.concat(lowLetter);
}
// do the same check for every confirm
if(confirmtallletter){
  password = password.concat(tallLetter);
  
}

if(confirmnumbers){
  password = password.concat(numbers);
}
if(confirmspecial){
  password = password.concat(special);
  console.log(password);
} else {
  alert("Please try again!");
  generatePassword()
}
// test to see if we get concat array- note we may need to make a final array to concat too
let newPassword = ""
// once we have a final array we can loop over ist however many times the user chose and get a random value out with math.random
for (var index = 0; index < passOBj; index++) {
  newPassword = newPassword.concat(password[Math.floor(Math.random() * password.length)]);
console.log(newPassword);
}
// finally return the joined string ass the password
return newPassword;

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
