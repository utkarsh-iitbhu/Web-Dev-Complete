
// EventListener -> type say click, function to use
// Dont use func() with bracket, coz iss line pe aate hi 
// eventListener calls and function runs
// Instead use just name of the function 
var drnumber = document.querySelectorAll(".drum").length;


// Detecting Button press
for(var i=0 ; i<drnumber; i++){
    
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var buthtml = this.innerHTML; 
    makeSound(buthtml);    
    buttonAnimation(buthtml);
});

}


// Detecting Keyboard press
document.addEventListener("keydown",handle);
function handle(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}



function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();        
        break;
        
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();        
        break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();        
        break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();        
        break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();        
        break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();        
        break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();        
        break;

        default:
            console.log(buthtml);
    }

}

function buttonAnimation(curkey){
    // Adding animation from pressed class in css
   var activebtn =  document.querySelector("."+curkey);
   activebtn.classList.add("pressed")

    // Setting disapearance of animation 
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);

}