const form = document.getElementById('form');
const email = document.getElementById('email');
form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    }
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (message) => {
    const errorDisplay = document.querySelector('.error');
    errorDisplay.innerText = message;
    email.classList.add('input-error');
    errorDisplay.style.display = 'block';
    errorDisplay.classList.add('active');
}

const setSuccess = () => {
    const errorDisplay = document.querySelector('.error');
    errorDisplay.textContent = '';
    errorDisplay.style.display = 'none';
    if (email.classList.contains('input-error'))
        email.classList.remove('input-error');
    errorDisplay.classList.remove('active');
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError('Email is required');
        return false;
    } else if (!isValidEmail(emailValue)) {
        setError('Please provide a valid email');
        return false;
    } else {
        setSuccess();
        return true;
    }
}