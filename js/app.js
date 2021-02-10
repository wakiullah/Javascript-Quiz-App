(function() {
    let rightAnswers = document.querySelectorAll('.right');
    let wrongAnswers = document.querySelectorAll('.wrong');
    let form = document.querySelector("form")
    let formSection = document.querySelector(".form")
    let nameInput = document.querySelector('.name')
    let Name = '';
    let tryAgainBtn = document.querySelector('.try-again');
    let emailInput = document.querySelector('#email')
    let alertDiv = document.querySelector('.alert');
    let firstForm = document.querySelector('.first-form');

    rightAnswers.forEach(rightanswer => {
        rightanswer.addEventListener("click", function(e) {
            let currQuiz = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
            let nextQuiz = currQuiz.nextElementSibling;

            isCorrect(currQuiz, nextQuiz);
            isError('green')
        })
    })

    wrongAnswers.forEach(wrongAnswer => {
        wrongAnswer.addEventListener("click", function(e) {
            let mainText = e.target.innerText;
            e.target.innerText = 'Pleace Try Again';
            setTimeout(function() {
                e.target.innerText = mainText;
            }, 1500)
            isError('red');
        })
    })

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (nameInput.value === '' || emailInput.value === '') {

            alertDiv.classList.remove('d-none');
            alertDiv.classList.add('d-block');
            alertDiv.innerText = 'Please enter a valid value';

            setTimeout(function() {
                alertDiv.classList.add('d-none');
                alertDiv.classList.remove('d-block');
            }, 3000)
        } else {
            Name = nameInput.value;

            let formParent = e.target.parentElement;
            let next = formParent.nextElementSibling;
            isCorrect(formParent, next);

            let UserName = document.querySelector('.user-name')

            UserName.innerText = Name;
            nameInput.value = '';
            emailInput.value = "";


        }


    })

    tryAgainBtn.addEventListener('click', (e) => {

        let parent = e.target.parentElement;
        isCorrect(parent, firstForm)
        isError("rgb(255, 156, 145)")

    })

    function isCorrect(currQuiz, nextQuiz) {
        currQuiz.classList.remove('active');
        currQuiz.classList.add('inactive');
        nextQuiz.classList.remove('inactive');
        nextQuiz.classList.add('active');
    }


    function isError(color) {
        document.body.style.backgroundColor = color;
    }

})()