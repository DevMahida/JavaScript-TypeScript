export { };
import { questions } from './questions.js';

let questionIndex = 0;
let userAnswers = [];

// store selected quiz in local storage
let selectedQuiz = localStorage.getItem("selectedQuiz");

// transfer that perticular question in variable
let quizQues = questions[selectedQuiz];

// heading in quiz page
let heading = document.getElementById("heading");
heading.innerText = selectedQuiz;

// quiz start and back btn
let quizStart = document.getElementById("quizStart");
let quizBack = document.getElementById("quizBack");

// body part where question will be shown 
let quizQuesBody = document.getElementById("quizQuesBody")

// event handler to change view
quizStart.addEventListener("click", function () {
    quizStart.classList.add('d-none');
    quizBack.classList.add('d-none');
    quizQuesBody.classList.remove('d-none');
    quizQuesBody.classList.add('d-block');
    showQues();
})

// main question div : quizQuesBody -> Question 
let Questions = document.getElementById("Questions");

// select h3 where question will be printed
let ques = document.getElementById("ques");

// selected radio btn where the option will be shown
let option1label = document.getElementById("option1-label");
let option2label = document.getElementById("option2-label");
let option3label = document.getElementById("option3-label");
let option4label = document.getElementById("option4-label");

// main display quiz part
const showQues = () => {
    ques.innerText = quizQues[questionIndex].question;
    option1label.innerText = quizQues[questionIndex].options[0];
    option2label.innerText = quizQues[questionIndex].options[1];
    option3label.innerText = quizQues[questionIndex].options[2];
    option4label.innerText = quizQues[questionIndex].options[3];

};

// handle question change
window.nextQues = () => {

    // store selected radio btn
    let selectedOption = document.querySelector(
        'input[name="options"]:checked'
    );

    if (!selectedOption) {
        alert("Please select an option");
        return;
    }

    // convert radio btn id into number 0 to 3
    userAnswers[questionIndex] = Number(
        selectedOption.id.replace("option", "")
    ) - 1;

    questionIndex++;

    if (questionIndex < quizQues.length) {

        // set option to unselect 
        document.querySelectorAll('input[name="options"]')
            .forEach(option => option.checked = false);

        showQues();

    } else {
        showResult();
    }
    
};


const showResult = () =>{
    let score = 0;

    for (let i = 0; i < quizQues.length; i++) {

        if(userAnswers[i]===quizQues[i].correctAnswer){
            score++;
        }
        
    }

    Questions.innerHTML = `
                    <div class='text-center'>
                        <h2>Quiz Finished</h2>
                        <p>Your Score is ${score}/${quizQues.length}</p>
                        <a href='./index.html' class='btn btn-dark'><i class="ri-home-line"></i></a>
                    </div>            
    `;

};