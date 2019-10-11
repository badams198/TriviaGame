var questions = [
    {
        question: "Who wrote Hitchhiker's Guide to the Galaxy?",
        choices: ["Stphen King", "Douglas Adams", "Dr.Seuss", "Michelle Obama"],
        correctAnswer: 1
    },
    {
        question: "In Mario games, what is the name of Mario's brother?",
        choices: ["Nate", "Will", "Luigi", "Hot Dog"],
        correctAnswer: 2
    },
    {
        question: "What is 1+1?",
        choices: ["2", "100", "11", "3"],
        correctAnswer: 0
    },
    {
        question: "WWhat color is grass?",
        choices: ["Blue ", "green", "white", "purple"],
        correctAnswer: 1
    },
    {
        question: "What is 2+2?",
        choices: ["4", "5", "9", "22"],
        correctAnswer: 0
    },

  
];

var activeQuestion = 0;
var correct = 0;
var gameOver = false;

$(document).ready(function () {
    $('.score').hide();
    $(".quiz").hide();
    

    $(".btn").click(function () {
        $("#clickStart").hide();
        $(".quiz").show();
        $(".nextBttn").show();
        
        

    })
    //to display current question&answer choices.
    function showQuestions() {

        var question = questions[activeQuestion].question;
        var questionArea = $(document).find(".quiz > .question");
        var answrArea = $(document).find(".quiz > .answrArea");
        var answrNum = questions[activeQuestion].choices.length;
        var selection;
        
        $(questionArea).text(question);

        //remove previous answers after going to next question
        $(answrArea).find("li").remove();
      
        //create radio buttons based on number of answer choices.
        for (i = 0; i < answrNum; i++) {
            selection =
                questions[activeQuestion].choices[i];
            $('<li><input type="radio" value=' + i + ' name="option"/>' + selection + '</li>').appendTo(answrArea);
           
        }
    };

    

    //displays question
    showQuestions();
    $(".nextBttn").text("Next Question");


    $(this).find(".errMssg").hide();
    //display next question on click.
    $(".nextBttn").on("click", function () {
        $(".nextBttn").on("click", function () {

            showQuestions();
        })

        if (!gameOver) {

            value = $("input[type=radio][name=option]:checked").val();
            //show message if answer not selected
            if (value === undefined) {
                $(document).find(".errMssg").text("choose an answer!");

                $(document).find(".errMssg").show();
            } else {
                $(document).find(".errMssg").hide();
                
                if (value == questions[activeQuestion].correctAnswer) {
                    console.log(value);
                    correct++;
                }
                activeQuestion++;

                if (activeQuestion < questions.length) {
                    showQuestions();
                } else {
                    gameOver = true;
                    $(".question, .answrArea, .nextBttn").hide();
                    showScore();
                   
                }
            }
        } else {
            gameOver = false;

            $(".nextBttn").text("Next Question");
            hideScore();
            showQuestions();    
        }
    });
});




function showScore() {
    $(document).find(".quiz > .score").text("Score: " + correct + " Correct out of " + questions.length);
    $(document).find(".quiz > .score").show();
};

function hideScore() {
    $(document).find(".score").hide();
};
