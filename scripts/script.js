// Create reference for input fields
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

// Create reference for buttons
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// Simple email validation
function validateEmail(email) {
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");
    return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// Add callback function for input onkeyup events
firstNameInput.onkeyup = () => resetValidation(firstNameInput);
lastNameInput.onkeyup = () => resetValidation(lastNameInput);
emailInput.onkeyup = () => resetValidation(emailInput);
passwordInput.onkeyup = () => resetValidation(passwordInput);
confirmPasswordInput.onkeyup = () => resetValidation(confirmPasswordInput);

function resetValidation(input) {
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
}

// Add callback function for submit button
submitBtn.onclick = () => {
    let isValid = true;

    // Validate first name
    if (!firstNameInput.value.trim()) {
        firstNameInput.classList.add("is-invalid");
        isValid = false;
    } else {
        firstNameInput.classList.add("is-valid");
    }

    // Validate last name
    if (!lastNameInput.value.trim()) {
        lastNameInput.classList.add("is-invalid");
        isValid = false;
    } else {
        lastNameInput.classList.add("is-valid");
    }

    // Validate email
    if (!validateEmail(emailInput.value.trim())) {
        emailInput.classList.add("is-invalid");
        isValid = false;
    } else {
        emailInput.classList.add("is-valid");
    }

    // Validate password
    if (passwordInput.value.length < 6) {
        passwordInput.classList.add("is-invalid");
        isValid = false;
    } else {
        passwordInput.classList.add("is-valid");
    }

    // Validate confirm password
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.classList.add("is-invalid");
        isValid = false;
    } else {
        confirmPasswordInput.classList.add("is-valid");
    }

    if (isValid) alert("Registered successfully");
};

// Add callback function for reset button
resetBtn.onclick = () => {
    // Clear all input fields
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
        input.classList.remove('is-valid', 'is-invalid');
    });
};
