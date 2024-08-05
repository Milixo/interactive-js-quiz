const questions = [
    {
        question: "Koji je glavni grad Francuske?",
        answers: ["Berlin", "Madrid", "Pariz", "London"],
        correct: 2
    },
    {
        question: "Koji je najviši vrh na svijetu?",
        answers: ["K2", "Everest", "Makalu", "Kangchenjunga"],
        correct: 1
    },
    {
        question: "Koji je najduži riječni sustav na svijetu?",
        answers: ["Amazon", "Nil", "Jangce", "Mississippi"],
        correct: 1
    },
    {
        question: "Koji je najveći ocean na svijetu?",
        answers: ["Atlantski ocean", "Indijski ocean", "Arktički ocean", "Tihi ocean"],
        correct: 3
    },
    {
        question: "Koji je najviši vodopad na svijetu?",
        answers: ["Niagara", "Angel", "Victoria", "Iguazu"],
        correct: 1
    },
    {
        question: "Koji je najmanji kontinent po površini?",
        answers: ["Afrika", "Antarktika", "Australija", "Europa"],
        correct: 2
    },
    {
        question: "Koji je glavni grad Japana?",
        answers: ["Kyoto", "Osaka", "Tokio", "Nagoya"],
        correct: 2
    },
    {
        question: "Koji je najstariji univerzitet na svijetu?",
        answers: ["Harvard", "Oxford", "Bologna", "Al-Qarawiyyin"],
        correct: 3
    },
    {
        question: "Koja je najduža rijeka u Europi?",
        answers: ["Volga", "Dunav", "Seine", "Loire"],
        correct: 0
    },
    {
        question: "Koji je planet najbliži Suncu?",
        answers: ["Venera", "Zemlja", "Mars", "Merkur"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
    document.getElementById('next-button').addEventListener('click', showNextQuestion);
    document.getElementById('restart-button').addEventListener('click', restartQuiz);
});

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(index, button));
        answersContainer.appendChild(button);
    });
    document.getElementById('next-button').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');
}

function selectAnswer(index, button) {
    const question = questions[currentQuestionIndex];
    if (index === question.correct) {
        score++;
        button.classList.add('correct');
    } else {
        document.getElementById('feedback').classList.remove('hidden');
        button.classList.add('incorrect');
    }
    Array.from(document.getElementsByClassName('answer-button')).forEach(btn => {
        btn.disabled = true;
    });
    document.getElementById('next-button').classList.remove('hidden');
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').textContent = `${score} od ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    showQuestion();
}
