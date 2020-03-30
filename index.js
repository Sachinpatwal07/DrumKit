var S = new Audio("sounds/tom-1.mp3");

var A = new Audio("sounds/snare.mp3");

var C = new Audio("sounds/tom-3.mp3");

var H = new Audio("sounds/tom-4.mp3");

var I = new Audio("sounds/kick-bass.mp3");

var N = new Audio("sounds/crash.mp3");

var L = new Audio("sounds/tom-2.mp3");



$(".drum").on("click", function() {

 console.log("hello");
  soundPlayer(this.innerHTML);

  annimation(this.innerHTML);

})

$(document).on("keypress", function(event) {

  soundPlayer(event.key);

  annimation(event.key);

})



function soundPlayer(a) {


  switch (a) {
    case "s":
                S.src =  S.src;
                S.play();
                break;
    case "a":
                A.src = A.src;
                A.play();
                break;
    case "c":
                C.src = C.src;
                C.play();
                break;
    case "h":
                H.src = H.src;
                H.play();
                break;
    case "i":
                I.src = I.src;
                I.play();
                break;
    case "n":
                N.src = N.src;
                N.play();
                break;
    case "l":
                L.src = L.src;
                L.play();
                break;

  }


}

function annimation(key) {

var z =$("." + key);

  z.addClass("pressed");

  setTimeout(function() { z.removeClass("pressed");}, 100);

}
