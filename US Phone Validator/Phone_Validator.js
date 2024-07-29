// FILE HEADER
//This project determines if the user's input is a valid US phone number.

//Get required elements
const checkButton = document.getElementById("check-btn");

const userInput = document.getElementById("user-input");

const clearButton = document.getElementById("clear-btn");

const results = document.getElementById("results-div");

//When the check button is clicked
checkButton.addEventListener("click", ()=>{
  if(userInput.value === "") {
    alert("Please provide a phone number");
  } else {
    isValid(phoneRegex, phoneRegex2, invalidRegex, userInput.value);
  }
})

//When the clear button is clicked, previous outputs should disappear
clearButton.addEventListener("click", () => {
  results.textContent = "";
})

//Regices for determining if the input is a valid/invalid number
const phoneRegex = /^(?:1\s?)?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$|\d{10}$/

const phoneRegex2 = /^(?:1\s?)?(\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$|\d{10}$/

const invalidRegex = /\d{11}/

//function that determines and outputs if the user input is valid/invalid
function isValid(regex, regex2, invalid, input){
    if(invalid.test(input)){
      results.textContent += "\nInvalid US number: " + userInput.value;
    }
   else if(regex.test(input) || regex2.test(input)){
    results.textContent += "\nValid US number: " + userInput.value;
  } else {
    results.textContent += "\nInvalid US number: " + userInput.value;
  }
}