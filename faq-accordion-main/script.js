fetch("./app.json").then(response => {
    return response.json();
}).then(data => {
    generateFAQ(data);
}).catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});

function generateFAQ(data) {
    data.forEach(element => {
        // Card
        const faqList = document.querySelector('.faq-list');

        // <p>
        const answerSection = document.createElement('p');
        answerSection.style.height = "0px";
        answerSection.innerHTML = `${element["answer"]}`;

        // Question section
        const questionSection = document.createElement('div');
        questionSection.classList.add('question-section');
        const h2 = document.createElement('h2');
        h2.innerHTML = `${element["question"]}`;
        const img = document.createElement('img');
        img.src = "./assets/images/icon-plus.svg";
        FAQlogic(questionSection, answerSection, img);

        // img.classList.add('');
        questionSection.appendChild(h2);
        questionSection.appendChild(img);

        
        faqList.appendChild(questionSection);
        faqList.appendChild(answerSection);
    });
}

function FAQlogic(questionSection, answerSection, img) {
    questionSection.addEventListener("click", () => {
        if (answerSection.style.height === "0px") {
            answerSection.style.height = answerSection.scrollHeight + "px";
            img.src = "./assets/images/icon-minus.svg";
        } else {
            answerSection.style.height = "0px";
            img.src = "./assets/images/icon-plus.svg";
        }
})}