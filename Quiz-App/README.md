# Quiz Master

Quiz Master is a lightweight browser-based quiz app built with HTML, CSS, Bootstrap, and vanilla JavaScript. It lets users start a subject quiz or a random quiz of the day, answer multiple-choice questions, and see their final score at the end.

## Features

- Landing page with quick access to available quiz modes
- Subject quizzes for HTML, CSS, and JavaScript
- Random quiz of the day with mixed questions
- Multiple-choice question interface
- Countdown timer for each quiz mode
- Final score screen with a return-to-home button
- Responsive layout powered by Bootstrap

## How It Works

1. Open the home page in the browser.
2. Choose a quiz category or start the random quiz.
3. Click Start on the quiz page.
4. Select one answer for each question and click Next or Submit.
5. View your final score when the quiz ends or when the timer runs out.

## Quiz Modes

- HTML Quiz: 20 questions
- CSS Quiz: 30 questions
- JavaScript Quiz: 30 questions
- Random Quiz of the Day: 5 mixed questions from all topics

## Timer

- Subject quizzes use a 30-minute timer
- Random quiz mode uses a 5-minute timer
- When the timer reaches zero, the result screen is shown automatically

## Tech Stack

- HTML5
- CSS3
- Bootstrap
- Vanilla JavaScript
- Remix Icon

## Project Structure

```text
Quiz-App/
├── index.html
├── quiz.html
└── assets/
    ├── CSS/
    │   ├── bootstrap.min.css
    │   └── style.css
    ├── images/
    └── JS/
        ├── bootstrap.bundle.min.js
        ├── questions.js
        ├── quiz.js
        └── script.js
```

## Files Overview

- [index.html](index.html): Home page with quiz selection cards
- [quiz.html](quiz.html): Quiz screen where questions, answers, and timer are shown
- [assets/JS/script.js](assets/JS/script.js): Handles quiz mode selection and navigation
- [assets/JS/quiz.js](assets/JS/quiz.js): Controls question display, scoring, and timer logic
- [assets/JS/questions.js](assets/JS/questions.js): Stores the quiz question data
- [assets/CSS/style.css](assets/CSS/style.css): Custom styling and animations

## Notes

- The app uses `localStorage` to remember the selected quiz type between pages.
- This project is designed to run directly in the browser, so no build step is required.

## Video Explanation

- Video title: Quiz App Project Explanation
- Video URL: https://drive.google.com/drive/folders/1pJrfELFNMcwQ-JU980FnbuM5Dnp1Roxg?usp=sharing
