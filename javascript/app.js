const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const closeButton = document.querySelector(".close");
const questions = document.querySelectorAll('.faq-question');

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
});

closeButton.addEventListener("click", function () {
    menu.classList.remove("active");
});


questions.forEach(question => {
    question.addEventListener('click', () => {
        questions.forEach(q => {
            if (q !== question) {
                q.classList.remove('active');
                q.nextElementSibling.style.maxHeight = '0';
            }
        });
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






