
const questions = [
{
    question: "What is Physics?",
    options: [
        "Study of living things",
        "Study of matter, energy, and forces",
        "Study of chemicals"
    ],
    answer: "Study of matter, energy, and forces"
},
{
    question: "What is the SI unit of force?",
    options: ["Newton", "Joule", "Watt"],
    answer: "Newton"
},
{
    question: "Who is known for the law of gravity?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo"],
    answer: "Isaac Newton"
},
{
    question: "What is the SI unit of mass?",
    options: ["Kilogram", "Meter", "Second"],
    answer: "Kilogram"
},
{
    question: "Which instrument measures temperature?",
    options: ["Thermometer", "Barometer", "Ammeter"],
    answer: "Thermometer"
},
{
    question: "What is the SI unit of length?",
    options: ["Meter", "Liter", "Kilogram"],
    answer: "Meter"
},
{
    question: "Speed is defined as:",
    options: [
        "Distance divided by time",
        "Force divided by mass",
        "Mass divided by volume"
    ],
    answer: "Distance divided by time"
},
{
    question: "What type of energy is stored in a stretched rubber band?",
    options: [
        "Kinetic Energy",
        "Elastic Potential Energy",
        "Heat Energy"
    ],
    answer: "Elastic Potential Energy"
},
{
    question: "What is the SI unit of time?",
    options: ["Minute", "Hour", "Second"],
    answer: "Second"
},
{
    question: "Which of these is a vector quantity?",
    options: ["Distance", "Speed", "Velocity"],
    answer: "Velocity"
}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressEl= document.getElementById("progress");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = questions[currentQuestion];

    progressEl.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionEl.textContent = q.question;

    answersEl.innerHTML = "";

    q.options.forEach(option => {
        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", () => {
            if (option === q.answer) {
                score++;
            }

            scoreEl.textContent = `Score: ${score}`;
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                finishQuiz();
            }
        });
    });
}   
loadQuestion();