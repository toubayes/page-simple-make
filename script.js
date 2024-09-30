const submit=document.querySelector(".fileds button");
let inputs=document.querySelectorAll(".fileds input");
let errors=document.querySelectorAll(".error");

submit.addEventListener("click",(event)=>{
    console.log("Submit button clicked");

    let isFormValid = true; // Track form validation status
    
    inputs.forEach((input, index) => {
        if (input.value.trim() === "") {
            errors[index].innerHTML = `${input.type} input cannot be empty`;
            input.style.borderColor = "red"; // Set the border color to red
            isFormValid=false;
        } else {
            errors[index].innerHTML = ""; // Clear the error message if input is not empty
            input.style.borderColor = ""; // Reset the border color
        }
    });

    // If the form is not valid, prevent submission
    if (!isFormValid) {
        event.preventDefault();
        console.log("Form submission prevented due to validation errors.");
    }
});

