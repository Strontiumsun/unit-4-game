$(document).ready(function () {

    // creating variables

    var targetNumber = Math.floor((Math.random() * 120) + 19);
    var counter = 0;
    var imageCrystal;
    var crystalValues = [];

    // this displays the target number in the correct place
    $("#number-to-guess").html(targetNumber);

    // https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
    // this function generates 4 random numbers and assigns them to the crystalValues array
    function crystalNumberGenerator(arr) {
        if (arr.length >= 4) return;
        var crystalRan = Math.floor((Math.random() * 12) + 1);
        if (arr.indexOf(crystalRan) < 0) {
            arr.push(crystalRan);
            console.log(crystalRan);
        }
        crystalNumberGenerator(arr);
    };
    // this calls the function
    crystalNumberGenerator(crystalValues);
    // console.log test = success 
    console.log(crystalValues);

    // this function should create 4 crystals and assign each a number
    // right now, it makes 1 crystal
    function createCrystals() {

        for (var i = 0; i < crystalValues.length; i++) {
            imageCrystal = $("<img>");

            imageCrystal.addClass("crystal-image");

            imageCrystal.attr("src", "assets/images/crystal_placeholder.jpg");

            imageCrystal.attr("data-crystalvalue", crystalValues[i]);

            $("#crystals").append(imageCrystal);

        }
    };
    createCrystals();

    // this onclick function will reference the value of the crystal, and display it on screen in the right place
    // multiple clicks will continue to add the value correctly 
    $(".crystal-image").on("click", function () {
        var uniValues = ($(this).attr("data-crystalvalue"));
        uniValues = parseInt(uniValues);
        counter += uniValues;
        $("#current-points").html(counter);

        // here I'm putting in how the example game was won. I know ours needs to be be different; I just wanted to test if it works at all
        alert("New score: " + counter);

        if (counter === targetNumber) {
            alert("You win!");
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
        }
    })
})