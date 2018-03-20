
"use strict"

//Timer for quiz

let count=60;

let secTimer= setInterval(timer, 1000);

function timer() {
    count = count-1;
    console.log(count)
    if (count <= 0) {
        
        clearInterval(secTimer);
        console.log(count)
        //counter ended do stuff here
        alert("Time's Up! Submit your answers below to see your results!")

    }
    $("#time-left").text(count + " secs")
}





//  function fifteenSeconds() {
//      $("#time-left").append("15 Seconds Remaining");
//      console.log(correctCounter)
//  }
 

//  function timeUp() {
//     $("#time-left").empty();
//     $("#time-left").append("Times Up");
    
//  }


let correctCounter = 0;
let incorrectCounter = 0;

//once submit button is clicked checks all questions and displayes correct and incorrect answers
$( "#button" ).on( "click", function() {

    let answer1 = $("input[name='coaches']:checked").val();
    if (answer1 === "Sir Alex Ferguson") {
        
        correctCounter++;
        
    } else {

        incorrectCounter++;
    }

    let answer2 = $("input[name='trophies']:checked").val();
    
    if (answer2 === "20") {
       
        correctCounter++;

    } else {
       
        incorrectCounter++;
    }

    let answer3 = $("input[name='player']:checked").val();

    if (answer3 === "Paul") {
       
        correctCounter++;

    } else {
        
        incorrectCounter++;
    }
    
    let answer4 = $("input[name='goals']:checked").val();

    if (answer4 === "Wayne Rooney") {
       
        correctCounter++;

    } else {
        
        incorrectCounter++;
    }

    let answer5 = $("input[name='notplayer']:checked").val();

    if (answer5 === "Lionel Messi") {
       
        correctCounter++;

    } else {
        
        incorrectCounter++;
    }
    
    //dislaying scores and displaying aswers
    $(".correct").append(correctCounter)
    $(".incorrect").append(incorrectCounter)
    
    $(".first").append('<p>Correct Answer: Sir Alex Ferguson</p>')
    $(".second").append('<p>Correct Answer: 20</p>')
    $(".third").append('<p>Correct Answer: Paul Pogba</p>')
    $(".fourth").append('<p>Correct Answer: Wayne Rooney</p>')
    $(".fifth").append('<p>Correct Answer: Lionel Messi</p>')


    });
 


