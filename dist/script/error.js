"use strict";
const contactForm = document.getElementById('contact-form');
const firstName = document.getElementById('firstName');
const firstNameError = document.getElementById('firstNameError');
const lastName = document.getElementById('lastName');
const lastNameError = document.getElementById('lastNameError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const message = document.getElementById('message');
const messageError = document.getElementById('messageError');
const agreeCheck = document.getElementById('agreeCheck');
const agreeCheckError = document.getElementById('agreeCheckError');
function showError(errorSpan, message) {
    errorSpan.textContent = message;
    errorSpan.classList.add('active');
}
function hideError(errorSpan) {
    errorSpan.textContent = '';
    errorSpan.classList.remove('active');
}
function validateFirstName() {
    if (!firstName.value.trim()) {
        showError(firstNameError, 'First name is required.');
        return false;
    }
    hideError(firstNameError);
    return true;
}
function validateLastName() {
    if (!lastName.value.trim()) {
        showError(lastNameError, 'Last name is required.');
        return false;
    }
    hideError(lastNameError);
    return true;
}
function validateEmail() {
    const value = email.value.trim();
    if (!value) {
        showError(emailError, 'Email is required.');
        return false;
    }
    if (!value.includes('@') || !value.includes('.')) {
        showError(emailError, 'Please enter a valid email address.');
        return false;
    }
    hideError(emailError);
    return true;
}
function validateMessage() {
    const value = message.value.trim();
    if (!value) {
        showError(messageError, 'Message is required.');
        return false;
    }
    if (value.length < 5) {
        showError(messageError, 'Message must have at least 5 characters.');
        return false;
    }
    hideError(messageError);
    return true;
}
function validateAgreeCheck() {
    if (!agreeCheck.checked) {
        showError(agreeCheckError, 'You must agree to our privacy policy.');
        return false;
    }
    hideError(agreeCheckError);
    return true;
}
function validateForm() {
    let isValid = true;
    if (!validateFirstName())
        isValid = false;
    if (!validateLastName())
        isValid = false;
    if (!validateEmail())
        isValid = false;
    if (!validateMessage())
        isValid = false;
    if (!validateAgreeCheck())
        isValid = false;
    return isValid;
}
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        const alertBox = document.createElement("div");
        alertBox.classList.add("alert", "success");
        alertBox.textContent = 'Forumulário válido! Enviando...';
        document.body.appendChild(alertBox);
        setTimeout(() => {
            alertBox.remove();
            contactForm.reset();
        }, 3000);
    }
});
firstName.addEventListener('input', validateFirstName);
lastName.addEventListener('input', validateLastName);
email.addEventListener('input', validateEmail);
message.addEventListener('input', validateMessage);
agreeCheck.addEventListener('change', validateAgreeCheck);
