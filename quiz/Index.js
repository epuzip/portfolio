const button = document.querySelector('.btn');
const answers = document.querySelectorAll('#answer');

button.addEventListener('click', result);

const par = document.querySelector('#show');

function result(e) {
    e.preventDefault();

    let points = 0;
    answers.forEach(answer => {
        if (answer.checked) points ++;
    });

    par.textContent = "Ваши баллы: " + points;
}