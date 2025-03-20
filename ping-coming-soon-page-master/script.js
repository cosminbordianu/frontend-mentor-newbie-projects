const form = document.getElementById('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
    if (!checkInput())
        e.preventDefault();
})

function setError(message) {
    const errorMsg = document.querySelector('.error');
    if (!emailInput.classList.contains('error-input'))
        emailInput.classList.add('error-input');
    errorMsg.textContent = message;
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function setSuccess() {
    const errorMsg = document.querySelector('.error');
    if (emailInput.classList.contains('error-input'))
        emailInput.classList.remove('error-input');
    errorMsg.textContent = '';
}

function checkInput() {
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
        setError('Email is required');
        return false;
    }
    else if (!isValidEmail(emailValue)) {
        setError('Please provide a valid email address');
        return false;
    }
    else {
        setSuccess();
        return true;
}
}
