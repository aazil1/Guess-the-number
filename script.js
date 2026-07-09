let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess(){

    const guess = Number(document.getElementById("guess").value);

    const message = document.getElementById("message");

    attempts++;

    document.getElementById("attempts").textContent = attempts;

    if(guess === randomNumber){

        message.innerHTML = "🎉 Correct! You won!";

        message.style.color = "green";

    }

    else if(guess < randomNumber){

        message.innerHTML = "📉 Too Low!";

        message.style.color = "orange";

    }

    else{

        message.innerHTML = "📈 Too High!";

        message.style.color = "red";

    }

}

function restartGame(){

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    document.getElementById("attempts").textContent = 0;

    document.getElementById("message").innerHTML = "New game started!";

    document.getElementById("message").style.color = "black";

    document.getElementById("guess").value = "";

}
