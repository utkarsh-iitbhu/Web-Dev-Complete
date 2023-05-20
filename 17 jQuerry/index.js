

$("h1").css("color","blue");


// $(document).ready(function(){ 
//     $("h1").css("color","blue") });

// Adding event listener using jQuerry
$("h1").click(function(){
    $("h1").css("color","green");
});

// Applies eventListener to all the buttons
$("button").click(function(){
    $("h1").css("color","red");
});

$("html").keydown(function(e){
    $("h1").text(e.key);
});

// Use on function to add eventListener 
$("h1").on("mouseover",function(){
    $("h1").css("color","yellow");
});
 
// Removes everything
// $("button").remove();

// Add animations
$("button").on("click",function(){
    $("h1").fadeToggle();
});
 