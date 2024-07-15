// FILE HEADER
// This project converts the user's input to a Roman Numeral.

const convertButton = document.getElementById("convert-btn");

const input = document.getElementById("number");

const output = document.getElementById("output");


convertButton.addEventListener("click", ()=>{
  const parsedInput = parseInt(input.value);

  //if output is empty
  if(input.value === ""){
  output.textContent = "Please enter a valid number ";
  }
  //if output is < 1
  else if(input.value <= 0){
    output.textContent = "Please enter a number greater than or equal to 1";
  }
  //if output is > 3999
  else if(input.value >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999";
  } 
  else {
    output.textContent = convert(parsedInput);
  }
})

const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

//recursive calculation to convert input to a roman numeral
const convert =(input) => {
  let result = "";
  
  for(let i = 0; i < nums.length; ++i){

    while(input >= nums[i]){
      result += symbols[i];
      input -= nums[i];
    }

  }
  console.log(result);
  return result;
}
