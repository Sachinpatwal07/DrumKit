for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    soundPlayer(this.innerHTML);
    annimation(this.innerHTML);

  });

  document.addEventListener("keypress", function(event) {


    soundPlayer(event.key);
    annimation(event.key);

  })



  function soundPlayer(a) {


    switch (a) {
      case "s":
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
        break;
      case "a":
        var sound = new Audio("sounds/snare.mp3")
        sound.play();
        break;
      case "c":
        var sound = new Audio("sounds/tom-3.mp3");
        sound.play();
        break;
      case "h":
        var sound = new Audio("sounds/tom-4.mp3");
        sound.play();
        break;
      case "i":
        var sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
        break;
      case "n":
        var sound = new Audio("sounds/crash.mp3");
        sound.play();
        break;
      case "l":
        var sound = new Audio("sounds/tom-2.mp3");
        sound.play();
        break;

    }


  }

  function annimation(key) {

    var z = document.querySelector("." + key);
    z.classList.add("pressed");
    setTimeout(function() {
      z.classList.remove("pressed");
    }, 100);

  }


}
