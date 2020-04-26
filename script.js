

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
   correctAnswer: "D"
   },
        {
           question: "The Condition in and if/else statement is enclosed within ___:",
           answers: {
              a:"Quotes",
              b:"Curly Brackets",
              c:"Parentheses",
              d:"Square Brackets",
           },
           correctAnswer: "A"
        },
        {
           question:"Arrays in JavaScript can be used to store__:",
           answers: {
              a:"numbers and strings",
              b:"other",
              c:"booleans",
              d:"all of the above",
           },
           correctAnswer: "D"
        },
        {
         question:"String values must be enclosed within__ when being asigned to variables:",
         answers: {
            a:"curly brackets",
            b:"Quotation Marks",
            c:"parentheses",
            d:"commas",
         },
         correctAnswers:"B"
      }
      
         

    
       
   // }, 
    //{
       // (B) Curly brackets\n (C)Quotation Marks\n (D) Parentheses",
       // answer: "C"
   // }, 
    //{
       // prompt: "A very useful tool used during development and debugging for printing content to the debugger is:\n (A) Javascript\n\
      //  (B) terminal/bash\n (C)for loops\n (D) console.log",
      //  answer: "C"
   // }, 

//]
//var score =0
