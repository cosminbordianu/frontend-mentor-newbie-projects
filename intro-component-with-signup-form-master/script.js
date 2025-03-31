const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();  // Prevent form submission initially
    checkInputs();
});

const checkInputs = () => {
    const inputs = document.querySelectorAll('#form input');
    const email = document.querySelector('#form input#email');
    let formValid = true;  // Flag to track if the form is valid

    inputs.forEach(input => {
        if (input.value === '') { 
            const inputParent = input.parentElement;
            form.classList.add('error-form');
            inputParent.classList.add('error-div');
            formValid = false; 
        } else {
            const inputParent = input.parentElement;
            inputParent.classList.remove('error-div');
        }
    });

    if (!validateEmail(email.value)) { 
        const inputParent = email.parentElement;
        form.classList.add('error-form');
        inputParent.classList.add('error-div');
        inputParent.querySelector('.error').textContent = 'Looks like this is not an email';
        formValid = false;
    } else {
        const inputParent = email.parentElement;
        inputParent.classList.remove('error-div');
    }

    if (formValid) {
        form.submit();  // Submit the form
    }
};

const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
};
