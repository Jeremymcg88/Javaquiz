let secondsLeft = 70

let timerBtn = document.getElementById ('timer');

let scoresDiv = document.getElementById('scores-div');

let viewScoresBtn = document.getElementById('view scores');

var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('submit-btn')
var questionsContainerElement = document.getElementById ('questions-contain')
var questionElement = document.getElementById('questions')
var answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestions()
})

function startGame () {
console.log('Started')
startButton.classList.add('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionsContainerElement.classList.remove('hide');
setNextQuestions()
}

    function setNextQuestions() {
        resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    var button = document.createElement('button');
    button.innerText = answer.text
    button.classList.add('btn');
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
});
}

function resetState() {
nextButton.classList.add('hide');
while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}
}



function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide');
    } else {
        startButton.innerHTML= 'Restart'
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('false')
    }
}

function clearStatusClass(element, correct) {
    element.classList.remove('correct')
    element.classList.remove('wrong');
} 
var questions = [
    {
        question: 'What is 2 + 2 ',
        answers: [
            { text: '4', correct: true},
            { text: '2', correct: false},
            { text: '3', correct: false},
            { text: '5', correct: false},

            
        ]
    },
    { question: 'What is 4 + 4 ',
answers: [
    { text: '8', correct: true},
    { text: '5', correct: false},
    { text: '6', correct: false},
    { text: '78', correct: false},
]},

{ question: 'What is 1 + 1',
    answers: [
        { text: '2', correct: true},
        { text: '3', correct: false},
        { text: '5', correct: false},
        {text:'6', correct: false},
    ]}
]