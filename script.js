

//var startBtn = document.querySelector("#StartQuiz");


// Add event listener to generate button
//startBtn.addEventListener("click", BeginQuiz);



(function(){
   function buildQuiz(){
     // variable to store the HTML output
     const output = [];
 
     // for each question...
     myQuestions.forEach(
       (currentQuestion, questionNumber) => {
 
         // variable to store the list of possible answers
         const answers = [];
 
         // and for each available answer...
         for(letter in currentQuestion.answers){
 
           // ...add an HTML radio button
           answers.push(
             `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
               ${letter} :
               ${currentQuestion.answers[letter]}
             </label>`
           );
         }
 
         // add this question and its answers to the output
         output.push(
           `<div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join('')} </div>`
         );
       }
     );
 
     // finally combine our output list into one string of HTML and put it on the page
     quizContainer.innerHTML = output.join('');
   }
 
   function showResults(){
 
     // gather answer containers from our quiz
     const answerContainers = quizContainer.querySelectorAll('.answers');
 
     // keep track of user's answers
     let numCorrect = 0;
 
     // for each question...
     myQuestions.forEach( (currentQuestion, questionNumber) => {
 
       // find selected answer
       const answerContainer = answerContainers[questionNumber];
       const selector = `input[name=question${questionNumber}]:checked`;
       const userAnswer = (answerContainer.querySelector(selector) || {}).value;
 
       // if answer is correct
       if(userAnswer === currentQuestion.correctAnswer){
         // add to the number of correct answers
         numCorrect++;
 
         // color the answers green
        // answerContainers[questionNumber].style.color = 'lightgreen';
       }
       // if answer is wrong or blank
       //else{
         // color the answers red
        // answerContainers[questionNumber].style.color = 'red';
      // }
     });
 
     // show number of correct answers out of total
     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
   }
 
   const quizContainer = document.getElementById('quiz');
   const resultsContainer = document.getElementById('results');
   const submitButton = document.getElementById('submit');
   const myQuestions = [
      {
         question: "Commonly used data types DO NOT include?",
         answers: {
          a: "Strings",
          b: "Booleans",
          c: "Alerts",
          d: "Numbers",
      
         },
         correctAnswer: "d"
         },
              {
                 question: "The Condition in and if/else statement is enclosed within ___:",
                 answers: {
                    a:"Quotes",
                    b:"Curly Brackets",
                    c:"Parentheses",
                    d:"Square Brackets",
                 },
                 correctAnswer: "a"
              },
              {
                 question:"Arrays in JavaScript can be used to store__:",
                 answers: {
                    a:"numbers and strings",
                    b:"other",
                    c:"booleans",
                    d:"all of the above",
                 },
                 correctAnswer: "d"
              },
              {
               question:"String values must be enclosed within__ when being asigned to variables:",
               answers: {
                  a:"Curly brackets",
                  b:"Quotation Marks",
                  c:"Parentheses",
                  d:"Commas",
               },
               correctAnswers:"b"
            },
            { 
               question: "A very useful tool used during developement and debugging for printing content to the debugger is:",
               answers: {
                  a:"Javascript",
                  b:"Terminal/bash",
                  c:"for loops",
                  d:"console.log",
      
               },
               correctAnswer: "c"
            }
      
               ];
 
   // Kick things off
   buildQuiz();
 
   // Event listeners
   submitButton.addEventListener('click', showResults);
 })();
      