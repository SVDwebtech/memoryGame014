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
const startGameBtn = document.querySelector(".startGameBtn");
const newGameBtn = document.querySelector(".newGameBtn");

// card display variables
const cardDisplay = document.querySelectorAll(".cardDisplay");
const cardContainer = document.querySelector(".card-container");
const cardContainerTwenty = document.querySelector(".card-container-twenty");
const cardContainerForty = document.querySelector(".card-container-forty");
const cardContainerSixty = document.querySelector(".card-container-sixty");
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
let preventRotateCounter = 0;

// card comparisson variables
let compareCardOneText = "";
let compareCardTwoText = "";
let cardNumOne = 0;
let cardNumTwo = 0;
let cardPairsHiddenCounter;
let cardFront;
let cardBack;

// game loaded variables
let isGameStarted = false;

///////////////////////////////////////////////////////////////////////////////////////////////
// Game Difficulty And Load Player Info

cardContainerTwenty.classList.toggle("display-none");
cardContainerForty.classList.toggle("display-none");
cardContainerSixty.classList.toggle("display-none");

loadGameBtn.addEventListener("click", checkCheckbox);
// Game Difficulty Checkbox Function
function checkCheckbox() {
	if (checkboxEasy.checked) {
		cardContainerTwenty.classList.toggle("display-none");
		cardPairsHiddenCounter = 10;
		const arr = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10
		];
		shuffle(arr);
		console.log(arr);

		for (let i = 0; i < arr.length; i++) {
			cardSideDisplayBack[i].textContent = arr[i];
		}
	}
	else if (checkboxMedium.checked) {
		cardContainerForty.classList.toggle("display-none");
		cardPairsHiddenCounter = 20;
		const arr = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20
		];
		shuffle(arr);
		console.log(arr);

		for (let i = 0; i < arr.length; i++) {
			cardSideDisplayBack[i].textContent = arr[i];
		}
	}
	else {
		cardContainerSixty.classList.toggle("display-none");
		cardPairsHiddenCounter = 30;
		const arr = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30
		];
		shuffle(arr);
		console.log(arr);

		for (let i = 0; i < arr.length; i++) {
			cardSideDisplayBack[i].textContent = arr[i];
		}
	}

	// capture name and reset input value
	playerNameDislpay.textContent = nameInputDisplay.value;
	nameInputDisplay.value = "";

	// hide name input and gamedifficulty settings and display other game buttons
	nameInputDisplay.style.display = "none";
	gameDifficultyCheckboxes.style.display = "none";
	loadGameBtn.style.display = "none";
	startGameBtn.style.display = "block";
}

///////////////////////////////////////////////////////////////////////////////////////////////
// Start Timer and Load Card Flip Functionality

startGameBtn.addEventListener("click", startTimerAndCardFlip);

function startTimerAndCardFlip() {
	startTimer();
	cardClick();
	startGameBtn.style.display = "none";
	newGameBtn.style.display = "block";
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
function shouldTimerStop() {
	if (cardPairsHiddenCounter === 0) {
		clearInterval(intervalID);
	}
}

// Card Click function
function cardClick() {
	for (let i = 0; i < cardDisplay.length; i++) {
		cardDisplay[i].addEventListener("click", function() {
			clickCount++;
			cardFront = cardSideDisplayFront[i];
			cardBack = cardSideDisplayBack[i];
			if (preventRotateCounter <= 1) {
				if (counter === 0) {
					compareCardOneText = cardSideDisplayBack[i].textContent;
					cardNumOne = i;
					console.log("cardNumOne = " + cardNumOne);
					rotateCard();
					preventRotateCounter++;
				}

				if (counter === 1) {
					compareCardTwoText = cardSideDisplayBack[i].textContent;
					cardNumTwo = i;
					console.log("cardNumTwo = " + cardNumTwo);

					if (cardNumOne === cardNumTwo) {
						console.log("click on another card");
						counter = 0;
					}
					else {
						rotateCard();
						preventRotateCounter++;
						// compare cards and if equal hide them
						console.log("compare the pair of cards");
						compareCards();
						// rotate both cards to front after compared
						console.log("rotate the pair of cards to front");
						rotateBothCards();
						shouldTimerStop();
					}
				}

				counter++;
			}
		});
	}
}

//Rotate Card Function
function rotateCard() {
	// rotate card when clicked
	if (counter <= 1 && preventRotateCounter <= 1) {
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
		flipCounter();
	}, 2000);
	setTimeout(function() {
		preventRotateCounter = 0;
	}, 2100);
}

// Flip Counter Function
function flipCounter() {
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
	clickCounter++;
	if (compareCardOneText === compareCardTwoText) {
		setTimeout(function() {
			cardDisplay[cardNumOne].style.visibility = "hidden";
			cardDisplay[cardNumTwo].style.visibility = "hidden";
		}, 1000);
		cardPairsHiddenCounter--;
	}
}

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[
			array[currentIndex],
			array[randomIndex]
		] = [
			array[randomIndex],
			array[currentIndex]
		];
	}

	return array;
}
