window.addEventListener("load", initEvents);

let winning_combinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];

let gameOver = false;

function initEvents() {
    loadButtons();
}

function loadButtons() {
    var table = document.querySelector("#gameBoard");
    for (var i = 0; i < 3; i++) {
        // Create row inside table
        var tr = table.insertRow();
        for (var j = 0; j < 3; j++) {
            // Create column inside row
            var td = tr.insertCell();
            // Create a new element on HTML
            var btn = document.createElement("button");
            btn.className = "btn";
            btn.addEventListener("click", userMove);
            td.appendChild(btn);
        }
    }
}

function userMove() {
    if (gameOver) return; // Prevent moves if game is over

    this.innerHTML = "X";
    this.style.backgroundColor = "blueviolet";

    this.setAttribute("disabled", "true");

    checkWinner(); // Check if the user wins

    // Call cpuMove function after 1 second if the game is not yet won
    if (!gameOver) {
        setTimeout(() => {
            cpuMove();
        }, 1000);
    }
}

function cpuMove() {
    if (gameOver) return; // Prevent moves if game is over

    let btns = document.querySelectorAll(".btn");
    let availableButtons = Array.from(btns).filter(btn => btn.innerHTML === "");

    if (availableButtons.length === 0) return; // No moves left

    let randomIndex = parseInt(Math.random() * availableButtons.length);
    let btn = availableButtons[randomIndex];
    
    btn.innerHTML = "0";
    btn.style.backgroundColor = "pink"
    btn.setAttribute("disabled", "true");
    checkWinner(); // Check if CPU wins
}

function checkWinner() {
    let btns = document.querySelectorAll(".btn");

    for (let combo of winning_combinations) {
        let [a, b, c] = combo;

        if (btns[a].innerHTML && btns[a].innerHTML === btns[b].innerHTML && btns[a].innerHTML === btns[c].innerHTML) {
            // console.log(btns[a].innerHTML + " Won the game!");
            gameOver = true;
            disableAllButtons();
            btns[a].style.backgroundColor="green"
            btns[b].style.backgroundColor="green"
            btns[c].style.backgroundColor="green"
            alert(btns[a].innerHTML + " has won the game");
            return;
        }
    }

    if (Array.from(btns).every(btn => btn.innerHTML)) {
        alert("It's a draw!");
        console.log("It's a draw!");
        gameOver = true;
    }
}


function disableAllButtons() {
    let btns = document.querySelectorAll(".btn");
    btns.forEach(btn => btn.setAttribute("disabled", "true"));
}
