
"use strict"

//Timer for quiz

//  setTimeout(fifteenSeconds, 1000 *15);
//  setTimeout(timeUp, 1000 * 30);

let count=3;

let secTimer= setInterval(timer, 1000);

function timer() {
    count = count-1;
    if (count <= 0) {
        
        clearInterval(secTimer);
        
        //counter ended do stuff here
        alert("Time is up, let's see how you did!")

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
    
    

    $(".correct").append(correctCounter)
    $(".incorrect").append(incorrectCounter)


    });
 


