const readline = require('readline');

// Quiz questions and answers
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
        correctAnswer: "A"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Jupiter", "B. Mars", "C. Venus", "D. Saturn"],
        correctAnswer: "B"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["A. H2O", "B. CO2", "C. O2", "D. NaCl"],
        correctAnswer: "A"
    }
];

// Scoring system
let score = {
    correct: 0,
    incorrect: 0
};

// Function to display a random quiz question
function displayRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    const question = quizQuestions[randomIndex];

    console.log(question.question);
    question.options.forEach(option => {
        console.log(option);
    });

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the letter of your answer (e.g., A, B, C, D): ", (userAnswer) => {
        rl.close();
        checkAnswer(question, userAnswer.toUpperCase());
    });
}

// Function to check user's answer
function checkAnswer(question, userAnswer) {
    if (userAnswer === question.correctAnswer) {
        console.log("Correct!");
        score.correct++;
    } else {
        console.log("Incorrect!");
        score.incorrect++;
    }
}

// Function to start the quiz
function startQuiz() {
    console.log("Welcome to the Online Quiz Game!\n");

    quizQuestions.forEach(() => {
        displayRandomQuestion();
    });

    displayFinalScore();
}

// Function to display final score
function displayFinalScore() {
    console.log("\nQuiz Finished!");
    console.log(`Correct Answers: ${score.correct}`);
    console.log(`Incorrect Answers: ${score.incorrect}`);
}

// Start the quiz
startQuiz();
