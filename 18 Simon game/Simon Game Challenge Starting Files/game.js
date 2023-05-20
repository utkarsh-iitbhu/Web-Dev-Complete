
var btncolors = ["red", "blue", "green", "yellow"];

var gamePattern = []; 

var userclickptn = [];

var started = false; 
var level = 0; 

$(document).keypress(function(){
    if(!started){
        $("#level-title").text = "Level "+level;
        nextSequence();
        started = true;
    }
});


$(".btn").click(function() {
    var chosenclr = $(this).attr("id");
    userclickptn.push(chosenclr);
    playSound(chosenclr);
    animatePress(chosenclr);

    checkans(userclickptn.length-1);
});

function checkans(currentclr){
    if(gamePattern[currentclr] == userclickptn[currentclr]){
        if(userclickptn.length == gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press any key to start again");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },300);
    
    level = 0; 
    gamePattern = [];
    started = false;
    console.log("Wrong");
}};

function nextSequence(){

    userclickptn = [];
    level++; 
    $("#level-title").text("Level "+level);
    var randomnumber = Math.floor(Math.random()*4);
    var randomchoseclr = btncolors[randomnumber];
    gamePattern.push(randomchoseclr);

    $("#"+randomchoseclr).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomchoseclr);
    
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play(); 
}

function animatePress(currentclr){
    $("#" + currentclr).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentclr).removeClass("pressed");
  }, 100);
}
