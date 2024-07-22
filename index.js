
function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
// this is for button click method
for(var i =0;i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

// this is for keyboard button press method

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// function to make sound when a key or button is pressed
function makeSound(key){
    switch(key){ 
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
            console.log(this.innerHTML);
    }
}
// function to apply pressed style from CSS to make it look like an animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    // keys has been pressed and CSS stylesheet of pressed button has been applied but it's permanent so we have to remove it also 
    // to make it feek like an animation to users
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200); // 200 nanosec baad presed ka effaect apne aap htt jayga 
}