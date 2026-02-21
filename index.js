let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let form = document.getElementById("myForm");

// Error elements
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmError = document.getElementById("confirmError");

form.addEventListener("submit", function(event){
    event.preventDefault();

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";

    let isValid = true;

    // Name validation
    if(userName.value.trim() === ""){
        nameError.textContent = "Name must not be empty";
        isValid = false;
    }

    // Email validation
    if(!email.value.includes("@")){
        emailError.textContent = "Email must contain @";
        isValid = false;
    }

    // Password length validation
    if(password.value.length <= 6){
        passwordError.textContent = "Password must be greater than 6 characters";
        isValid = false;
    }

    // Password match validation
    if(password.value !== confirmPassword.value){
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }

    // If all valid
    if(isValid){
        alert("Form Submitted Successfully");
        form.reset();
    }
});