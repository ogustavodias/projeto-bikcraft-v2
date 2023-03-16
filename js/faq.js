const faqList = Array.from(document.querySelectorAll('li h3'));
let activeQuestion = document.querySelector('.ativa');


function activateQuestion(event) {
    const clicked = event.target;
    if (activeQuestion !== clicked) {
        activeQuestion.classList.remove('ativa');
    }
    activeQuestion = clicked;
    clicked.classList.toggle('ativa');
}

function listener(item) {
    item.addEventListener('click', activateQuestion)
}

faqList.forEach(listener);