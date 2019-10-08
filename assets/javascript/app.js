//The following array contains the questions and answers of the quiz.
var quiz = [ 
    {
        question: "Who wrote the score for Interstellar?",
        answer: "Hans Zimmer",
        options: ["Hans Zimmer", "Yann Tiersen", "Ennio Morricone", "John Williams"]
    },
    {
        question: "Who played the main role in Joker (2019)?",
        answer: "Joaquin Phoenix",
        options: ["Joaquin Phoenix", "Heath Ledger", "Jack Nicholson", "Mark Hamill"]
    },
    {
        question: "Inception was filmed in all of the following cities except:",
        answer: "Berlin",
        options: ["Tokyo", "Tangier", "Los Angeles", "Berlin"]
    }
]
var score = 0;
var randomQuestion;

    //Handles the click event.
    $("#question-section").on("click", "li", function(){
        var selection = $(this).text();
        if(selection === quiz[randomQuestion].answer){
            alert("Correct");
            score++;
        } else {
            alert("False");
            score--;
        }
        quiz.splice(randomQuestion, 1);
        if(quiz.length > 0) {
            nextQuestion();
        } else {
            $('h1').empty();
            $('#question-section').empty();
            $('h1').text("Game over");
            $('#question-section').text("Your score: " + score);
        }
    });        

function nextQuestion() {
    //This clears the screen.
    $('h1').empty();
    $('#question-section').empty();
    //This variable is used for selecting a random question.
    randomQuestion = Math.floor(Math.random() * quiz.length);
    //Inserts the new question in the document.
    var newQuestion = $("h1");
    newQuestion.html(quiz[randomQuestion].question);
    //Inserts the choices in the document.
    for(i = 0; i < quiz[randomQuestion].options.length; i++) {
        var newOption = $('<li>');
        newOption.text(quiz[randomQuestion].options[i]);
        $('#question-section').append(newOption);
    }
    return randomQuestion;
}

nextQuestion();



