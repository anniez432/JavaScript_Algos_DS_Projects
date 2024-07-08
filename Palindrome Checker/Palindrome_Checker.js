/* FILE HEADER
This is the first project I completed for this course. It determines
if a user's input is a palindrome.
*/

//Create variables for input and button
const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");

//When button is clicked
checkButton.addEventListener('click', () => {
  // Show alert if input is empty
  if (textInput.value.trim() === '') {
    alert('Please input a value');
  } 
  //Otherwise check if input is a palindrome
  else {
    checkPalindrome(textInput.value);
  }
});

//Function to check if input is a palindrome
function checkPalindrome(input){
  const userInput = input;
  input = input.toLowerCase().replace(/[^a-z0-9]/gi, "");
  if(input === input.split("").reverse().join("")){
    result.textContent = `${userInput} is a palindrome`;
  } else {
    result.textContent = `${userInput} is not a palindrome`;
  }
}

