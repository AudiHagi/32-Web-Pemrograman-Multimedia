// Load the sound file
var sound = new Audio("assets/sounds/click.mp3");

// Add an event listener to the navbar links with the class "nav-link"
$(".navbar-nav .nav-link").click(function() {
  // Play the sound
  sound.play();
});