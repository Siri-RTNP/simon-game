var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var detectStart = false;


$(document).keypress(function(){
  if (!detectStart) {
    $("#level-title").text("Level "+(level));
    nextSequence();
    detectStart = true;
  }
});


$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
      console.log("Correct!");
      setTimeout(function() {
        nextSequence();
      }, 800);

    }
    } else {
      playSound("wrong");
      $(document.body).addClass("game-over");
      $("#level-title").text("Game Over! Press Any Key To Restart");
      setTimeout(function() {
        $(document.body).removeClass("game-over");
      }, 200);
      console.log("False!");
      startOver();
    }
  }


function startOver(){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  detectStart = false;
}


function nextSequence(){
  userClickedPattern = [];
  var randNumber = Math.floor(Math.random()*4);
  var randChosenColour = buttonColours[randNumber];
  console.log("com "+buttonColours[randNumber]);
  gamePattern.push(randChosenColour);
  playSound(randChosenColour);
  animatePress(randChosenColour);
  level++;
  $("#level-title").text("Level "+level);
}


function playSound(inputSound){
  var sound = new Audio("sounds/"+inputSound+".mp3");
  sound.play();
}


function animatePress(currentColour){
  $("#"+currentColour).fadeOut(100).fadeIn(100);
  $("#"+currentColour).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  }, 100);
}



  //
  // $(".btn.green").click(function(){
  //   $(".btn.green").fadeOut(100).fadeIn(100);
  //   var sound = new Audio("sounds/green.mp3");
  //   sound.play();
  // });
  //
  // $(".btn.red").click(function(){
  //   $(".btn.red").fadeOut(100).fadeIn(100);
  //   var sound = new Audio("sounds/red.mp3");
  //   sound.play();
  // });
  //
  // $(".btn.yellow").click(function(){
  //   $(".btn.yellow").fadeOut(100).fadeIn(100);
  //   var sound = new Audio("sounds/yellow.mp3");
  //   sound.play();
  // });
  //
  // $(".btn.blue").click(function(){
  //   $(".btn.blue").fadeOut(100).fadeIn(100);
  //   var sound = new Audio("sounds/blue.mp3");
  //   sound.play();
  // });
