const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

const nameErrorText = document.getElementById('name-error');
const emailErrorText = document.getElementById('email-error');
const messageErrorText = document.getElementById('message-error');

const nameErrorLogo = document.getElementById('name-error-logo');
const emailErrorLogo = document.getElementById('email-error-logo');
const messageErrorLogo = document.getElementById('message-error-logo');

function submitForm(event) {
    event.preventDefault();
    nameField.classList.remove('error');
    emailField.classList.remove('error');
    messageField.classList.remove('error');

    nameErrorText.innerText = '';
    emailErrorText.innerText = '';
    messageErrorText.innerText = '';

    nameErrorLogo.style.display = 'none';
    emailErrorLogo.style.display = 'none';
    messageErrorLogo.style.display = 'none';

    if (!validateName(nameField.value)) {
        nameErrorText.innerText = 'Invalid name';
        nameField.classList.add('error');
        nameErrorLogo.style.display = 'block';
    }
    if (!validateEmail(emailField.value)) {
        emailErrorText.innerText = 'Invalid email';
        emailField.classList.add('error');
        emailErrorLogo.style.display = 'block';
    }
    if (!validateMessage(messageField.value)) {
        messageErrorText.innerText = 'Message is required';
        messageField.classList.add('error');
        messageErrorLogo.style.display = 'block';
    }
}

function validateName(name) {
    const re = /^[A-Za-z\s]+$/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S{2,3}$/;
    return re.test(email);
}

function validateMessage(message) {
    return message.length > 0;
}