const words = ["apple", "banana", "mango", "grape", "peach", "kiwi", "orange"];
let secretWord, attempts;

function startGame() {
    secretWord = words[Math.floor(Math.random() * words.length)]; // Random word selection
    attempts = 5; // Set max attempts
    document.getElementById("hint").textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;
    document.getElementById("message").textContent = "";
    document.getElementById("playAgain").style.display = "none";
    console.log("Secret word (for testing):", secretWord); 
}

function checkGuess() {
    let guess = document.getElementById("guessInput").value.trim().toLowerCase();

    if (guess === "") {
        document.getElementById("message").textContent = "Invalid input. Try again!";
        return;
    }

    if (guess === secretWord) {
        document.getElementById("message").textContent = "Congratulations! You guessed the secret word!";
        document.body.style.backgroundColor = "green"; 
        document.getElementById("playAgain").style.display = "block";
    } else {
        attempts--;
        if (attempts > 0) {
            document.getElementById("message").textContent = `Incorrect guess. You have ${attempts} attempts left. Try again!`;
        } else {
            document.getElementById("message").textContent = `Game over! The secret word was '${secretWord}'.`;
            document.body.style.backgroundColor = "red";
            document.getElementById("playAgain").style.display = "block";
        }
    }
}


startGame();

document.getElementById("guessInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});
