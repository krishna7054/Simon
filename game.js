var buttonColours = ["Red","blue","green","yellow"];

var gamePattern = [];


var userClickedPattern =[];

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");

userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
});


function nextsequence(){
  var randomnumber = Math.floor(Math.random()*4);

  var randomChosenColour = buttonColours[randomnumber];

  gamePattern.push(randomChosenColour);



  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

function playSound(name){  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColor) {

$("#" + currentColor).addClass("pressed");

setTimeout(function () {
  $("#" + currentColor).removeClass("pressed");
}, 100);
}
