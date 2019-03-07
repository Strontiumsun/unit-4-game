$(document).ready(function () {

    // creating variables

    var targetNumber = Math.floor((Math.random() * 120) + 19);
    var counter;
    var imageCrystal;
    var game = false;
    var winsCounter = $("#wins");
    var wins = 0;
    var lossesCounter = $("#losses");
    var losses = 0;
    var crystalValues = [];
    var crystalImages = ["https://slightlyburntout.com/wp-content/uploads/2015/01/Amethyst-Cluster-05_04_1_1.jpeg", "https://www.thespruce.com/thmb/UAp5ff80ZI_hscqq-3DA7ofJl40=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Siede-Preis-g-crystalcluster-56a2e2335f9b58b7d0cf8077.jpg", "https://www.minerals.net/GemStoneInTheRoughImages/smoky-quartz-uri-switzerland.jpg", "https://images-na.ssl-images-amazon.com/images/I/81eDsKD8ApL._SX425_.jpg"];


    // this displays the target number in the correct place
    function displayTarget() {
        $("#number-to-guess").html(targetNumber);
        $("#number-to-guess").attr("value", targetNumber);
    }
    console.log(targetNumber);

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

    // I modified this function from one of our in-class activities
    // this function creates 4 crystals and assigns each an image.
    // although I added the image files to my folder, I couldn't get them to work properly, so I used URLs instead.
    function createCrystals() {

        for (var i = 0; i < crystalValues.length; i++) {
            imageCrystal = $("<img>");

            imageCrystal.addClass("crystal-image");

            imageCrystal.attr("src", crystalImages[i]);

            imageCrystal.attr("data-crystalvalue", crystalValues[i]);

            $("#crystals").append(imageCrystal);

        }
    };


    function clearArray() {
        crystalValues.length = 0;
        function crystalNumberGenerator(arr) {
            if (arr.length >= 4) return;
            var crystalRan = Math.floor((Math.random() * 12) + 1);
            if (arr.indexOf(crystalRan) < 0) {
                arr.push(crystalRan);
                console.log(crystalRan);
            }
            crystalNumberGenerator(arr);
        };
        crystalNumberGenerator(crystalValues);
    }


    // this is the whole game
    function crystalGame() {
        counter = 0;
        displayTarget(targetNumber);
        clearArray();
        crystalNumberGenerator(crystalValues);
        $("#crystals").html("");

        createCrystals();
        console.log(crystalValues);
    }
    crystalGame();


    // this onclick function will reference the value of the crystal, and display it on screen in the right place
    // multiple clicks will continue to add the value correctly 

    //if you win, the game will restart
    // however, I was not able to get the clicking function to work again. I don't know why really.
    // (after due) classmate Ifran gave me the solution - change the listener to document, rather than the class. Now it works great! 
    $(document).on("click", ".crystal-image", function () {
        var uniValues = ($(this).attr("data-crystalvalue"));
        uniValues = parseInt(uniValues);
        counter += uniValues;
        $("#current-points").html(counter);

        if (counter === targetNumber) {
            alert("You win!");
            wins++;
            winsCounter.text(wins);
            crystalGame();
            $("#current-points").html(counter);
        }
        else if (counter >= targetNumber) {
            alert("You lose!!");
            losses++;
            lossesCounter.text(losses);
            crystalGame();
            $("#current-points").html(counter);

        }
    })




























})