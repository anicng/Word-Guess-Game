    // make a wordList for user to guess, using objects list out the word and number of letters.
    var wordList = [{
            "wordName": ["p", "o", "p", "c", "o", "r", "n"],
            "letterHolder": ["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ ", ],
            "letterCount": 7
        },
        {
            "wordName": "sushi",
            "letterCount": 5
        },

        {
            "wordName": "pie",
            "letterCount": 3
        }
    ]

    // prints all the words objece in console.
    console.log(wordList);
    // prints how many words are in the word list.
    console.log("wordListlength " + wordList.length);

    var currentWord = document.getElementById("current-word");
    var remainGuess = document.getElementById("remaining-guesses");
    var guessedLetter = document.getElementById("guessed-letter");
    var winsCount = document.getElementById("wins-count");


    // make an array to store correct words? make an array to store incorrect words? or just on array...
    var userInput = "";
    var keysInput = [];
    // keep track of wins, stars at 0
    var wins = 0;
    // keep track of guesses, starts at 15
    var guesses = 15;

    // 1. select a word in current word from wordList
    for (var i = 0; i < wordList.length; i++) {
        // current Word
        var word = wordList[i].wordName;
        console.log("word: " + wordList[i].wordName);

        // currentLetterCount
        var curLetterCount = wordList[i].wordName.length;
        console.log("curLetterCount " + curLetterCount);

    // 2. display "_ "'s to show user how many letters are in the word
        currentWord.textContent = "_ ".repeat(curLetterCount);

        // console.log(wordList[i].wordName.indexOf(event.key));
        // wordList.wordName.indexOf(event.key);

        // on key up even triggers the following
        document.onkeyup = function evenKeyFunction(event) {
            // this removes the refresh meta bug
            if (event.key.toLowerCase() !== "meta") {
                // concatenate userInput...
                userInput = userInput + " " + event.key;
                //... and show in div id "guessed-letter"
                guessedLetter.textContent = userInput;
                // and stores the new userInput key to keysInput array
                keysInput.push(event.key);
                console.log("keysInput" + keysInput);
            }

        // 3. When userInput a letter and is in the current word & replace "_" with correctly guessed letter

            if (word.includes(event.key)) {
                currentWord.textContent = event.key;
            } 
        // 4. Else, display the letter in guessedLetter & remaining-guesses -1
            else {
                currentWord.textContent = "_ ".repeat(curLetterCount);
                guesses --;
            };
        };




    }


    // Repeat for upto 15 incorrect guesses
    // remaining-guesses starts at 15



    // If remaining-guesses is >0 and currentWord completed, wins-count +1
    // change image to match currentWord



    // use wins ++ to increase win by one
    // use guesses -- to decrease guesses by one

    remainGuess.textContent = guesses;
    // display the amount of letters in same number of _
    // currentWord.textContent = "_ ".repeat(disLetterCount);
    winsCount.textContent = wins;

    // If remaining guess =0 and word not guessed, wins-count doesn't change
    // change image to match currentWord to reveal answer