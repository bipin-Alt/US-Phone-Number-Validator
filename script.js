
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

//function to validate the phone number using regex//
const validate = ()=>{
const filteringRegex = /^(?:\+?1\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

const inputContainer = document.getElementById("user-input").value;
const testedInput =filteringRegex.test(inputContainer);
if(inputContainer === ""){
  alert("Please provide a phone number");
}
else if(testedInput){
  result.textContent = `Valid US number: ${inputContainer}`
}else {
  result.textContent =`Invalid US number: ${inputContainer}`;
};

}

//adding event listener to the check button//
checkBtn.addEventListener("click", validate);
//function to clearing the result and input//
const clear = () =>{
  result.textContent = "";
  const inputContainer = document.getElementById("user-input");
  inputContainer.value = "";
};
//adding event listener to the clear button//
clearBtn.addEventListener("click",clear);
