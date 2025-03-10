const inputs = document.querySelectorAll('input[name="rating"]');
const labels = document.querySelectorAll('label');
let ratingValue = "";

inputs.forEach((input) => {
    input.addEventListener('change', () => {
        ratingValue = input.value;
        // Reset labels
        labels.forEach(label => {
            label.classList.remove("orange");
        });

        // Add class orange to the current label
        const currentLabel = document.querySelector(`label[for="${input.id}"]`);
        currentLabel.classList.add("orange");
    });
});

const form = document.getElementById('ratingForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (ratingValue == "")
        alert("You must select a rating!");
    else {
    const card = document.querySelector('.card');
    card.classList.add("submit-card");
    card.innerHTML = `
        <img src="./images/illustration-thank-you.svg" class="thank-you-image">
        <p class="card-desc-submit">You selected ${ratingValue} out of 5</p>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    `;}
});