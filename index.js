for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    function handleClick(){
        var buttonInnerHTML = this.innerHTML;
        buttonAnimated(buttonInnerHTML);
        switch(buttonInnerHTML){
            case "w":
                var tom1 = new Audio("tom-1.mp3");
                tom1.play();
            break;
            case "a":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play();
            break;
            case "s":
                var tom3 = new Audio("tom-3.mp3");
                tom3.play();
            break;
            case "d":
                var tom4 = new Audio("tom-4.mp3");
                tom4.play();
            break;
            case "j":
                var snare = new Audio("snare.mp3");
                snare.play();
            break;
            case "k":
                var crash = new Audio("crash.mp3");
                crash.play();
            break;
            case "l":
                var bass = new Audio("kick-bass.mp3");
                bass.play();
            break;
            default: console.log(buttonInnerHTML);
            
        }
    }
}

document.addEventListener("keypress", handlePress);
    function handlePress(event){
        var keyPressed = event.key;
        buttonAnimated(keyPressed);
        switch(keyPressed){
            case "w":
                var tom1 = new Audio("tom-1.mp3");
                tom1.play();
            break;
            case "a":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play();
            break;
            case "s":
                var tom3 = new Audio("tom-3.mp3");
                tom3.play();
            break;
            case "d":
                var tom4 = new Audio("tom-4.mp3");
                tom4.play();
            break;
            case "j":
                var snare = new Audio("snare.mp3");
                snare.play();
            break;
            case "k":
                var crash = new Audio("crash.mp3");
                crash.play();
            break;
            case "l":
                var bass = new Audio("kick-bass.mp3");
                bass.play();
            break;
            default: console.log(keyPressed);
            
        }
}

function buttonAnimated(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },500)
    
}