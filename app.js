///////////////////////////////////////////////////////////////////////////////////////////////
// DOM VARIABLES

// game input variables
const nameInputDisplay = document.querySelector(".nameInputDisplay");
const gameDifficultyCheckboxes = document.querySelector(
	".gameDifficultyCheckboxes"
);
const checkboxEasy = document.querySelector(".checkboxEasy");
const checkboxMedium = document.querySelector(".checkboxMedium");
const checkboxHard = document.querySelector(".checkboxHard");

// player info display variables
const playerNameDislpay = document.querySelector(".playerNameDisplay");
const counterDisplay = document.querySelector(".counter--display");
const minhand = document.querySelector(".minhand");
const sechand = document.querySelector(".sechand");

// game button variables
const loadGameBtn = document.querySelector(".loadGameBtn");
const newGameBtn = document.querySelector(".newGameBtn");

// card display variables
const cardDisplay = document.querySelectorAll(".cardDisplay");
const cardContainer = document.querySelector(".card-container");
const cardSideDisplayFront = document.querySelectorAll(".card__side--front");
const cardSideDisplayBack = document.querySelectorAll(".card__side--back");

///////////////////////////////////////////////////////////////////////////////////////////////
// GAME LOGIC VARIABLES

// timer variables
let minclick = 0;
let click = 0;
let intervalID;

// counter variables
let clickCount = 0;
let clickCounter = 0;
let counter = 0;

// card comparisson variables
let compareCardOneText = "";
let compareCardTwoText = "";
let cardNumOne = 0;
let cardNumTwo = 0;
let cardPairsHiddenCounter = 5;
let cardFront;
let cardBack;

// game loaded variables
let isGameStarted = false;

///////////////////////////////////////////////////////////////////////////////////////////////
// Game Logic

loadGameBtn.addEventListener("click", gameLogic);
loadGameBtn.addEventListener("click", cardClick);
newGameBtn.addEventListener("click", function() {});

loadGameBtn.addEventListener("click", checkCheckbox);
function checkCheckbox() {
	if (checkboxEasy.checked) {
		let newCardsMedium = "";
		for (let i = 1; i < 11; i++) {
			newCardsMedium +=
				'<div class="card card__card1 cardDisplay"><div class="card__side card__side--front">Front</div><div class="card__side card__side--back">1</div></div>';
		}

		cardContainer.innerHTML = newCardsMedium;
	}
	else if (checkboxMedium.checked) {
		let newCardsMedium = "";
		for (let i = 1; i < 31; i++) {
			newCardsMedium +=
				'<div class="card card__card1 cardDisplay"><div class="card__side card__side--front">Front</div><div class="card__side card__side--back">1</div></div>';
		}

		cardContainer.innerHTML = newCardsMedium;
	}
	else {
		let newCardsMedium = "";
		for (let i = 1; i < 101; i++) {
			newCardsMedium +=
				'<div class="card card__card1 cardDisplay"><div class="card__side card__side--front">Front</div><div class="card__side card__side--back">1</div></div>';
		}

		cardContainer.innerHTML = newCardsMedium;
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// Game Functions

// Card Rotate and Compare Function
// function cardRotateAndCompareLogic() {}

// Game Logic Function
function gameLogic() {
	console.log("loadGameBtn clicked");
	// start timer display
	startTimer();
	console.log("player name captured and display other buttons");
	// capture name and reset input value
	playerNameDislpay.textContent = nameInputDisplay.value;
	nameInputDisplay.value = "";
	// hide name input and gamedifficulty settings and display other game buttons
	nameInputDisplay.style.display = "none";
	gameDifficultyCheckboxes.style.display = "none";
	loadGameBtn.style.display = "none";
	newGameBtn.style.display = "block";

	isGameStarted = true;
}

// card click function

function cardClick() {
	for (let i = 0; i < cardDisplay.length; i++) {
		let cardRotateAndCompareLogic = function() {
			// add click listener to each card
			console.log("eventlistener added to each card");
			clickCount++;
			cardFront = cardSideDisplayFront[i];
			cardBack = cardSideDisplayBack[i];
			// flip card to back when clicked
			console.log("just before rotate card: counter = " + counter);
			// rotate card to back when clicked
			console.log("rotate card to back");
			rotateCard();

			if (counter === 0) {
				compareCardOneText = cardSideDisplayBack[i].textContent;
				cardNumOne = i;
			}

			if (counter === 1) {
				flipCounter();
				compareCardTwoText = cardSideDisplayBack[i].textContent;
				cardNumTwo = i;
				// compare cards and if equal hide them
				console.log("compare the pair of cards");
				compareCards();
				// rotate both cards to front after compared
				console.log("rotate the pair of cards to front");
				rotateBothCards();
			}
			counter++;
			console.log("at end of game logic: Counter = " + counter);
		};
		cardDisplay[i].addEventListener("click", cardRotateAndCompareLogic);
	}
}

// Start Timer Function
function startTimer() {
	console.log("timer started");
	intervalID = setInterval(() => {
		click++;

		if (click < 60) {
			if (click < 10) {
				sechand.textContent = "0" + click;
			}
			else {
				sechand.textContent = click;
			}
		}
		else if (click === 60) {
			minclick++;
			minhand.textContent = "0" + minclick;
			sechand.textContent = "00";
			click = 0;
		}
	}, 1000);
}

// Stop Timer Function
function stopTimer() {
	cardPairsHiddenCounter--;
	if (cardPairsHiddenCounter === 0) {
		clearInterval(intervalID);
	}
}

//Rotate Card Function
function rotateCard() {
	// rotate card when clicked
	if (counter <= 1) {
		cardFront.classList.toggle("rotateCard180");
		cardBack.classList.toggle("rotateCard0");
	}
}

// Rotate Both Cards Function
function rotateBothCards() {
	counter = -1;
	setTimeout(function() {
		compareCardOneText = "";
		compareCardTwoText = "";

		cardSideDisplayFront[cardNumOne].classList.toggle("rotateCard180");
		cardSideDisplayBack[cardNumOne].classList.toggle("rotateCard0");
		cardSideDisplayFront[cardNumTwo].classList.toggle("rotateCard180");
		cardSideDisplayBack[cardNumTwo].classList.toggle("rotateCard0");
		cardNumOne = 0;
		cardNumTwo = 0;
	}, 2000);
}

// Start Flip Counter Function
function flipCounter() {
	clickCounter += counter;
	if (clickCounter <= 9) {
		counterDisplay.textContent = "00" + clickCounter;
	}
	else if (clickCounter <= 99) {
		counterDisplay.textContent = "0" + clickCounter;
	}
	else {
		counterDisplay.textContent = clickCounter;
	}
}

// Compare Cards Function
function compareCards() {
	if (compareCardOneText === compareCardTwoText) {
		setTimeout(function() {
			cardDisplay[cardNumOne].style.visibility = "hidden";
			cardDisplay[cardNumTwo].style.visibility = "hidden";
		}, 1000);
		// stop the timer if there's no other cards to flip
		stopTimer();
	}
}
