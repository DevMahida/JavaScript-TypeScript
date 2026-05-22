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
heading.innerText = selectedQuiz + " Quiz";

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
    if ((localStorage.getItem("selectedQuiz") === "randomQuiz")) {
        mixedIndex = Math.floor(Math.random() * mixedQuestions.length);
        storage = [mixedIndex];
    }
    showQues();
    startCounter();
});

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
    if (!(localStorage.getItem("selectedQuiz") === "randomQuiz")) {
        ques.innerText = quizQues[questionIndex].question;
        option1label.innerText = quizQues[questionIndex].options[0];
        option2label.innerText = quizQues[questionIndex].options[1];
        option3label.innerText = quizQues[questionIndex].options[2];
        option4label.innerText = quizQues[questionIndex].options[3];
    }

    if (localStorage.getItem("selectedQuiz") === "randomQuiz") {
        ques.innerText = mixedQuestions[mixedIndex].question;
        option1label.innerText = mixedQuestions[mixedIndex].options[0];
        option2label.innerText = mixedQuestions[mixedIndex].options[1];
        option3label.innerText = mixedQuestions[mixedIndex].options[2];
        option4label.innerText = mixedQuestions[mixedIndex].options[3];
    }

};

let nextSubmit = document.getElementById("nextSubmit");
nextSubmit.innerText = "Next";
console.log(questionIndex);

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
    if (!(localStorage.getItem("selectedQuiz") === "randomQuiz")) {
        userAnswers[questionIndex] = Number(
            selectedOption.id.replace("option", "")
        ) - 1;
        console.log("Useranswer", userAnswers);

    } else {
        userAnswers[mixedIndex] = Number(
            selectedOption.id.replace("option", "")
        ) - 1;
        console.log("Useranswer", userAnswers);
    }

    if (!(localStorage.getItem("selectedQuiz") === "randomQuiz")) {
        questionIndex++;

        if (questionIndex < quizQues.length) {

            // set option to unselect 
            document.querySelectorAll('input[name="options"]')
                .forEach(option => option.checked = false);

            showQues();

            console.log(questionIndex);


        }
        else {
            showResult();
        }

        // if last question then next -> submit
        if (questionIndex == quizQues.length - 1) {
            nextSubmit.innerText = "Submit";
        }
    } else {

        if (counter < maxQues) {
            mixedIndex = Math.floor(Math.random() * mixedQuestions.length);
            storage.push(mixedIndex);
            counter++;

            document.querySelectorAll('input[name="options"]')
                .forEach(option => option.checked = false);

            showQues();
        } else {
            showResult();
        }

    }
    console.log(storage);
    console.log(userAnswers);
    console.log(counter);
};

// result at the end
const showResult = () => {
    let score = 0;

    if (!(localStorage.getItem("selectedQuiz") === "randomQuiz")) {
        for (let i = 0; i < quizQues.length; i++) {

            if (userAnswers[i] === quizQues[i].correctAnswer) {
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
    } else {

        storage.forEach((e) => {
            if (userAnswers[e] === mixedQuestions[e].correctAnswer) {
                score++;
            }
        })

        Questions.innerHTML = `
                    <div class='text-center'>
                        <h2>Quiz Finished</h2>
                        <p>Your Score is ${score}/${maxQues}</p>
                        <a href='./index.html' class='btn btn-dark'><i class="ri-home-line"></i></a>
                    </div>            
    `;
    }



};

// ######################################################
//              Timer
// ######################################################

let hour;
let minute;
let second;

if (!(localStorage.getItem("selectedQuiz") === "randomQuiz")) {
    hour = 0;
    minute = 30;
    second = 0;
} else {
    hour = 0;
    minute = 5;
    second = 0;
}


let timer = document.getElementById("timer");

timer.innerText = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;

const startCounter = () => {
    let start = setInterval(() => {

        if (hour == 0 && minute == 0 && second == 0) {
            clearInterval(start);
            showResult();
            return;
        }

        second--;

        if (second < 0) {
            second = 59;
            minute--;
        }

        if (minute < 0) {
            minute = 59;
            hour--;
        }


        timer.innerText = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
    }, 1000);
}

// ######################################################
//                      Random quiz
// ######################################################

let mixedQuestions = [
    ...questions.html,
    ...questions.css,
    ...questions.js
];

let maxQues = 5;
let counter = 1;

let mixedIndex;
let storage;



if (localStorage.getItem("selectedQuiz") === "randomQuiz") {
    heading.innerText = "Quiz of the Day";
}
