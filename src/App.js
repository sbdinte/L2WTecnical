import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const quizTime = 130000
let questions = [
  {
    question: "What is a Recursive Method?",
    difficulty: 1,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit: 5000,
    answers: [
      { answer: "A method that calls itself.", correct: true },
      { answer: "A method with a for loop AND a while loop.", correct: false },
      { answer: "A method written out in pseudocode.", correct: false },
      { answer: "A void method type.", correct: false }
    ]
  },
  {
    question: "What is the result type of the following expression: 131 == (int)131.9",
    difficulty: 1,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit: 5000,
    answers: [
      { answer: "int", correct: true },
      { answer: "boolean", correct: false },
      { answer: "String", correct: false },
      { answer: "double", correct: false }
    ]
  },
  {
    question: "Indicate the most appropriate data type for this concept: the number of days in February",
    difficulty: 1,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit: 5000,
    answers: [
      { answer: "int", correct: true },
      { answer: "boolean", correct: false },
      { answer: "String", correct: false },
      { answer: "double", correct: false }
    ]
  },
  {
    question: "What Java type does an index need to be?",
    difficulty: 1,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit: 15000,
    answers: [
      {answer: "int", correct: true},
      {answer: "boolean", correct: false},
      {answer: "String", correct: false},
      {answer: "double", correct: false}
    ]
  },
  {
    question: "In Computer Science, API stands for: ",
    difficulty: 1,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit: 15000,
    answers: [
      {answer: "Application Programming Interface", correct: true},
      {answer: "Apache Program Index", correct: false},
      {answer: "Apple Programming Internship", correct: false},
      {answer: "Active Pharmaceutical Ingredient", correct: false}
    ]
  },
  {
    question: "Identify if this StdDraw method is used for input, output, or both: public static double mouseX()",
    difficulty: 1,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit: 15000,
    answers: [
      {answer: "input", correct: true},
      {answer: "output", correct: false},
      {answer: "both", correct: false}
    ]
  },
  {
    question: "The type 'char' is a :",
    difficulty: 1,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit: 15000,
    answers: [
      {answer: "Primitive type", correct: true},
      {answer: "Interface", correct: false},
      {answer: "Class", correct: false},
      {answer: "Method Declaration", correct: false}
    ]
  },
  {
    question: "What type of collection has a 'put()' type",
    difficulty: 1,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit: 15000,
    answers: [
      {answer: "Map", correct: true},
      {answer: "List", correct: false},
      {answer: "Set", correct: false}
    ]
  },
  {
    question: "Identify the fastest time complexity",
    difficulty: 2,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit:25000,
    answers: [
      {answer: "O(n*log(n))", correct: true},
      {answer: "O(1)", correct: false},
      {answer: "O(2n)", correct: false},
      {answer: "O(n^2)", correct: false}
    ]
  },
  {
    question: "Indicate which algorithm would give the fastest run time for: a list of english words that needs to be sorted in alphabetical order.",
    difficulty: 2,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit: 25000,
    answers: [
      {answer: "Radix Sort", correct: true},
      {answer: "Heap Sort", correct: false},
      {answer: "Selection Sort", correct: false}
    ]
  },
  {
    question: "Two distinct String objects that are not considered equivalent, according to Java's .equals() method, therefore they must have different hash codes. ",
    difficulty: 2,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit:25000,
    answers: [
      {answer: "true", correct: false},
      {answer: "false", correct: true}
    ]
  },
  {
    question: "what is the degree of a node?",
    difficulty: 2,
    numIncorrect: 0,
    numCorrect: 0,
    timeLimit:25000,
    answers: [
      {answer: "the number of children it has", correct: true},
      {answer: "how many times its been accessed", correct: false},
      {answer: "how many times its been resorted", correct: false},
      {answer: "a nodes parent", correct: false}
    ]
  },
]
function compareQuestions(Q1, Q2) {
  return Q2.numIncorrect - Q1.numIncorrect
}
function App() {
  useEffect(()=>{
    const time = setTimeout(()=>{
      setTimeLeft(timeLeft-1000)
      setQTime(qTime-1000)
    if(qTime <=0){
      setQuizState(2)
    }
    else if (timeLeft<=0){
      getNextQ(false)
    }
    }, 1000)
    return ()=> clearTimeout(time)

  })
  const [numCorrect, setNumCorrect] = useState(0) //number of correct
  const [curQ, setCurQ] = useState(0) //current question
  const [qTime, setQTime] = useState(10000000000) //state variable for timing the 5000 shows how long the easiest level question
  const [timeLeft, setTimeLeft] = useState(1000000000)
  const [scorePercent, setScorePercent] = useState(0)
  const [quizState, setQuizState] = useState(0)
  const getNextQ = (wasCorrect) => {
    if (curQ + 1 === questions.length) {
      console.log("resetting array")
      setCurQ(0)
      setScorePercent(Math.round(((numCorrect+wasCorrect) / questions.length)*100))
      questions = questions.sort(compareQuestions)
      setQuizState(2)
      console.log(questions.length, numCorrect)
    }
    else {
      setCurQ(curQ + 1)
      setTimeLeft(questions[curQ].timeLimit)
    }
    if (wasCorrect === true) {
      questions[curQ].numCorrect++
      setNumCorrect(numCorrect + 1)
    }
    else {
      questions[curQ].numIncorrect++
    }
  }
  return (
    <div className="App">
      <div style={quizState === 0 ? { display: 'block' } : { display: 'none' }}>
        <div style={{
          fontSize: '30px',
          fontFamily: 'Verdana, sans-serif',
          fontStyle: 'italic'
        }}>
          Hello and Welcome!  
      </div>
      <div style={{
          fontSize: '22px',
          fontFamily: 'Verdana, sans-serif'
        }}>
      The following quiz is meant to test your knowledge on Java Object-Oriented Programming.
      </div>
        <div style={{
          fontSize: '22px',
          fontFamily: 'Verdana, sans-serif'
        }}>
          Are you Ready to Begin? {
            <button onClick={() => {setQuizState(1) 
            setTimeLeft(questions[curQ].timeLimit)
            setQTime(quizTime) }}
            style={{
              fontSize: '14px',
              fontFamily: 'Verdana, sans-serif',
              fontWeight: 'bold'
              
            }}>
              Start Quiz!
          </button>
          }
        </div> </div>

      <div style={quizState === 1 ? { display: 'block' } : { display: 'none' }}>
        <div className="flashcard">
          <div className="question" style={
            {

              border: '2px solid black',
              margin: 'auto',
              width: '300px',
              height: '200px',
              backgroundColor: '#DCECF9',
              textAlign: 'center'
            }
          }>
            <h3>
              {
                questions[curQ].question
                
              }
            </h3>
          </div>
          <div>
          Please select your answer from the choices below:
          </div>
          <div className="answers">
            {
              questions[curQ].answers.map((a) => (
                <button onClick={() => getNextQ(a.correct)}>
                  {a.answer}
                </button>
              ))
            }
          </div>
          <h3>
            time left for this question: 
              {
              timeLeft/1000
              }
            </h3>
          <div>
            previously correct?: {
              questions[curQ].numCorrect
            }
          </div>
          <h4>
            Time elapsed:  {
                qTime/1000
            }
            </h4>
        </div>
      </div>
      <div style={quizState === 2 ? { display: 'block' } : { display: 'none' }}>
        <div className="numCorrect">
          Quiz Results
              Final Score: {
            "You answered " + numCorrect + " questions correctly; which is " + scorePercent + "%"
          }
        </div>
        <div>
          Would you like to try again?
            <button onClick={() =>  {
              setQuizState(1)
              setNumCorrect(0)
              setTimeLeft(questions[curQ].timeLimit)
              setQTime(quizTime)}}>
            Begin Again

            </button>
        </div>

      </div>
    </div>
  );
}
export default App;
