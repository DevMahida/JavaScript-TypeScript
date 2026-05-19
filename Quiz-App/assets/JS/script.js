let htmlStart = document.getElementById("htmlStart");
let cssStart = document.getElementById("cssStart");
let jsStart = document.getElementById("jsStart");


htmlStart.addEventListener("click", function () {

    localStorage.clear();

    localStorage.setItem(
        "selectedQuiz",
        "html"
    );

    window.location.href = "./quiz.html";

});

cssStart.addEventListener("click", function () {

    localStorage.clear();

    localStorage.setItem(
        "selectedQuiz",
        "css"
    );

    window.location.href = "./quiz.html";

});

jsStart.addEventListener("click", function () {

    localStorage.clear();

    localStorage.setItem(
        "selectedQuiz",
        "js"
    );

    window.location.href = "./quiz.html";

});

export default Script
