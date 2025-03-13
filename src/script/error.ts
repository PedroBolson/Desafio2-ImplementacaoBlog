const contactForm = document.getElementById('contact-form') as HTMLFormElement;

const firstName = document.getElementById('firstName') as HTMLInputElement;
const firstNameError = document.getElementById('firstNameError') as HTMLSpanElement;

const lastName = document.getElementById('lastName') as HTMLInputElement;
const lastNameError = document.getElementById('lastNameError') as HTMLSpanElement;

const email = document.getElementById('email') as HTMLInputElement;
const emailError = document.getElementById('emailError') as HTMLSpanElement;

const message = document.getElementById('message') as HTMLTextAreaElement;
const messageError = document.getElementById('messageError') as HTMLSpanElement;

const agreeCheck = document.getElementById('agreeCheck') as HTMLInputElement;
const agreeCheckError = document.getElementById('agreeCheckError') as HTMLSpanElement;

// Exibir mensagens de erro
function showError(errorSpan: HTMLSpanElement, message: string): void {
  errorSpan.textContent = message;
  errorSpan.classList.add('active');
}

function hideError(errorSpan: HTMLSpanElement): void {
  errorSpan.textContent = '';
  errorSpan.classList.remove('active');
}

// Validações para cada campo
function validateFirstName(): boolean {
  if (!firstName.value.trim()) {
    showError(firstNameError, 'First name is required.');
    return false;
  }
  hideError(firstNameError);
  return true;
}

function validateLastName(): boolean {
  if (!lastName.value.trim()) {
    showError(lastNameError, 'Last name is required.');
    return false;
  }
  hideError(lastNameError);
  return true;
}

function validateEmail(): boolean {
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

function validateMessage(): boolean {
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

function validateAgreeCheck(): boolean {
  if (!agreeCheck.checked) {
    showError(agreeCheckError, 'You must agree to our privacy policy.');
    return false;
  }
  hideError(agreeCheckError);
  return true;
}

// Função que valida todo o formulário
function validateForm(): boolean {
  let isValid = true;
  if (!validateFirstName()) isValid = false;
  if (!validateLastName()) isValid = false;
  if (!validateEmail()) isValid = false;
  if (!validateMessage()) isValid = false;
  if (!validateAgreeCheck()) isValid = false;
  return isValid;
}

// Envio do formulário
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

// Validação em tempo real
firstName.addEventListener('input', validateFirstName);
lastName.addEventListener('input', validateLastName);
email.addEventListener('input', validateEmail);
message.addEventListener('input', validateMessage);
agreeCheck.addEventListener('change', validateAgreeCheck);