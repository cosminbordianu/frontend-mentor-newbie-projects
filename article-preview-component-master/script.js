const shareMenu = document.querySelector('.share-menu');
const shareBtn = document.querySelector('.share-icon');

shareBtn.addEventListener('click', ()=> {
    shareMenu.classList.toggle('invisible');
    shareBtn.classList.toggle('dark-blue');
    // if (shareBtn.classList.contains('dark-blue'))
        // shareBtn.src = "./images/"
});