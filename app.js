///////////////////////////////////////////////////////////////////////////////////////////////
// DOM VARIABLES

// game input variables
const nameInputDisplay = document.querySelector(".nameInputDisplay");
const gameDifficultyCheckboxes = document.querySelector(
	".gameDifficultyCheckboxes"
);

// player info display variables
const playerNameDislpay = document.querySelector(".playerNameDisplay");
const counterDisplay = document.querySelector(".counter--display");
const minhand = document.querySelector(".minhand");
const sechand = document.querySelector(".sechand");

// game button variables
const loadGameBtn = document.querySelector(".loadGameBtn");
const resetAndShuffleBtn = document.querySelector(".resetAndShuffleBtn");
const newPlayerBtn = document.querySelector(".newPlayerBtn");

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

///////////////////////////////////////////////////////////////////////////////////////////////
// Load New Game Logic
loadGameBtn.addEventListener("click", gameLogic);

newPlayerBtn.addEventListener("click", function() {
	playerNameDislpay.textContent = "___enter new player name";
	nameInputDisplay.style.display = "block";
	gameDifficultyCheckboxes.style.display = "block";
	loadGameBtn.style.display = "block";
	resetAndShuffleBtn.style.display = "none";
	newPlayerBtn.style.display = "none";
	clearInterval(intervalID);
	sechand.textContent = "00";
	minhand.textContent = "00";
	console.log("new player loaded");
	minclick = 0;
	console.log("minclick should be 0 = " + minclick);
	click = 0;
	console.log("click should be 0 = " + click);
	clickCount = 0;
	console.log("clickCount should be 0 = " + clickCount);
	clickCounter = 0;
	console.log("clickCounter should be 0 = " + clickCounter);
	counter = 0;
	console.log("counter should be 0 = " + counter);
	compareCardOneText = "";
	console.log(
		'compareCardOneText should be "" = ' + '"' + compareCardOneText + '"'
	);
	compareCardTwoText = "";
	console.log(
		'compareCardTwoText should be "" = ' + '"' + compareCardTwoText + '"'
	);
	cardNumOne = 0;
	console.log("cardNumOne should be 0 = " + cardNumOne);
	cardNumTwo = 0;
	console.log("cardNumTwo should be 0 = " + cardNumTwo);
	cardCompareCounter = 5;
	console.log("cardCompareCounter should be 5 = " + cardCompareCounter);
	for (let i = 0; i < cardDisplay.length; i++) {
		cardDisplay[i].style.visibility = "visible";
		cardSideDisplayFront[i].classList.remove("rotateCard180");
		cardSideDisplayBack[i].classList.remove("rotateCard0");
		cardSideDisplayBack[i].classList.add("rotateCard180");
	}
	counterDisplay.textContent = "000";
});

//newPlayerBtn.removeEventListener("click", gameLogic);

//////////////////////////////////////////////////////////////////////////////////////////////////
// Game Functions

// Game Logic
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
	resetAndShuffleBtn.style.display = "block";
	newPlayerBtn.style.display = "block";

	// add click listener to each card
	console.log("eventlistener added to each card");
	for (let i = 0; i < cardDisplay.length; i++) {
		cardDisplay[i].addEventListener("click", function() {
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
		});
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
