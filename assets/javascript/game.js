/*There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.
When the player clicks on a crystal, it will add a specific amount 
of points to the player's total score.
Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from 
the beginning of the game.
The player loses if their score goes above the random number.
The game restarts whenever the player wins or loses.
When the game begins again, the player should see a new random 
number. Also, all the crystals will have four new hidden values. 
Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. 
To that end, do not refresh the page as a means to restart the game.
*/
<h1>Number to Guess: <span id="number-to-guess"></span></h1>
  <div id="crystals">

    <img class="crystal-image" src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg" alt="crystals">

  </div>

var targetNumber = 50;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  $(".crystal-image").on("click", function() {

    counter += 10;

    alert("New score: " + counter);

    if (counter === targetNumber) {

      alert("You win!");
    }

    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {

      // Then they are alerted with a loss.
      alert("You lose!!");
    }
