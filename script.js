

var startBtn = document.querySelector("#StartQuiz");


// Add event listener to generate button
startBtn.addEventListener("click", BeginQuiz);

var Currentquestion = 0;
var score = 0;
var totQuestions = questions.length;


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


         

    
       
   
//]
//var score =0
