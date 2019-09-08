

// make a wordList for user to guess, using objects list out the word and number of letters.
var wordList = [
        {
            "wordName": "popcorn", 
            "letterCount": 7
        },
        {
            "wordName": "sushi", 
            "letterCount": 5
        }
    ]

console.log (wordList);
// console.log ("words length" + words.length);
console.log ("wordListlength " + wordList.length);

// make an array to store correct words?

// make an array to store incorrect words?

var currentWord = document.getElementById("current-word");
var remainGuess = document.getElementById("remaining-guesses");
var guessedLetter = document.getElementById("guessed-letter");
var winsCount = document.getElementById("wins-count");


// select a word in current word from wordList
    // count how many letters are in the currentWord
    // display the amount of letters in same number of _
    

    // choose a randome letterCount
    var letterCount = wordList[Math.floor(Math.random() * wordList.length)].letterCount;
    console.log = ("letterCount " + wordList[Math.floor(Math.random() * wordList.length)].letterCount);


// When userInput a letter but is not in the current word...
    // display the word in guessed-word
    // remaining-guesses -1


// When userInput a letter and it is in the current word...
    // swap out the corrisponding "_" with the letter userInput


// Repeat for upto 15 incorrect guesses
    // remaining-guesses starts at 15



// If remaining-guesses is >0 and currentWord completed, wins-count +1
    // change image to match currentWord

var wins = 0;
var guesses = 15;

remainGuess.textContent = guesses;
currentWord.textContent = "_ ".repeat(letterCount);
winsCount.textContent = wins;

// If remaining guess =0 and word not guessed, wins-count doesn't change
    // change image to match currentWord to reveal answer


