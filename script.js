let player = {
    name: "Zishan",
    chips: 169
}
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";

let cardEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [
        firstCard,
        secondCard
    ]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    };
    messageEl.textContent = message;
};

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
};

function playAgain() {
    window.location.reload();
}
