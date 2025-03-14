"use strict";
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');
const firstName = document.getElementById('firstName');
const firstNameError = document.getElementById('firstNameError');
const lastName = document.getElementById('lastName');
const lastNameError = document.getElementById('lastNameError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const footerEmail = document.getElementById('footer-email');
const footerEmailError = document.getElementById('footerEmailError');
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
function validateEmail(emailField, errorField, requiredMsg = 'Email is required.', invalidMsg = 'Please enter a valid email address.') {
    const value = emailField.value.trim();
    if (!value) {
        showError(errorField, requiredMsg);
        return false;
    }
    if (!value.includes('@') || !value.includes('.')) {
        showError(errorField, invalidMsg);
        return false;
    }
    hideError(errorField);
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
function validateContactForm() {
    let isValid = true;
    if (!validateFirstName())
        isValid = false;
    if (!validateLastName())
        isValid = false;
    if (!validateEmail(email, emailError))
        isValid = false;
    if (!validateMessage())
        isValid = false;
    if (!validateAgreeCheck())
        isValid = false;
    return isValid;
}
function validateNewsletterForm() {
    return validateEmail(footerEmail, footerEmailError);
}
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateContactForm()) {
        const alertBox = document.createElement("div");
        alertBox.classList.add("alert", "success");
        alertBox.textContent = 'Formulário de contato válido! Enviando mensagem...';
        document.body.appendChild(alertBox);
        setTimeout(() => {
            alertBox.remove();
            contactForm.reset();
        }, 3000);
    }
});
newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateNewsletterForm()) {
        const alertBox = document.createElement("div");
        alertBox.classList.add("alert", "success");
        alertBox.textContent = 'Email válido! Enviando inscrição...';
        document.body.appendChild(alertBox);
        setTimeout(() => {
            alertBox.remove();
            newsletterForm.reset();
        }, 3000);
    }
});
firstName.addEventListener('input', validateFirstName);
lastName.addEventListener('input', validateLastName);
email.addEventListener('input', () => validateEmail(email, emailError));
footerEmail.addEventListener('input', () => validateEmail(footerEmail, footerEmailError));
message.addEventListener('input', validateMessage);
agreeCheck.addEventListener('change', validateAgreeCheck);
