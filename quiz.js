const quizData = [
    {
        question: " To convert from a user-defined class to a basic type, you would most likely use",
        a: "an overloaded = operator",
        b: "a one-argument constructor",
        c: "a built-in conversion operator",
        d: "a conversion operator that‘s a member of the class",
        correct: "a",
    },
      {
        question: " Inheritance is a way to",
        a: "pass arguments to objects of classes",
        b: "add features to existing classes without rewriting them",
        c: "improve data-hiding and encapsulation",
        d: "organize data",
        correct: "b",
    },
      {
        question: "  A C++ class is similar to",
        a: "Library File",
        b: "Header File",
        c: "Structure",
        d: "None of these",
        correct: "c",
    },
      {
        question: "Which one of the following features of OOP is used to derive a class from another?",
        a: "Encapsulation",
        b: "Polymorphism",
        c: "Data hiding",
        d: "Inheritance",
        correct: "d",
    },

];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++ 
    if (currentQuiz < quizData.length) {
      loadQuiz()
    }
    else{
      quiz.innerHTML = `
      <h2>You Answerd ${score} / ${quizData.length} questions correctly </h2>
      <button onclick = "location.reload()"> Reload </button>
      `
    }
    
  }
})