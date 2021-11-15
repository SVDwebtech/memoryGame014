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
const playerInfoItems = document.querySelectorAll(
	".gameInfo__playerInfo--infoItem"
);
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
const cardSideDisplayBackTwenty = document.querySelectorAll(
	".card__side--back20"
);
const cardSideDisplayBackForty = document.querySelectorAll(
	".card__side--back40"
);
const cardSideDisplayBackSixty = document.querySelectorAll(
	".card__side--back60"
);

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

for (let i = 0; i < playerInfoItems.length; i++) {
	const element = playerInfoItems[i];
	element.classList.toggle("playerInfoItemFontDisplay");
}

///////////////////////////////////////////////////////////////////////////////////////////////
// Game Difficulty And Load Player Info

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
			cardSideDisplayBackTwenty[i].textContent = arr[i];
			if (cardSideDisplayBackTwenty[i].textContent === "1") {
				cardSideDisplayBackTwenty[i].style.backgroundImage =
					"url(/img/shape1.png)";
			}
			else if (cardSideDisplayBackTwenty[i].textContent === "2") {
				cardSideDisplayBackTwenty[i].style.backgroundImage =
					"url(/img/shape2.png)";
			}
			else if (cardSideDisplayBackTwenty[i].textContent === "3") {
				cardSideDisplayBackTwenty[i].style.backgroundImage =
					"url(/img/shape3.png)";
			}
			else if (cardSideDisplayBackTwenty[i].textContent === "4") {
				cardSideDisplayBackTwenty[i].style.backgroundImage =
					"url(/img/shape4.png)";
			}
			else if (cardSideDisplayBackTwenty[i].textContent === "5") {
				cardSideDisplayBackTwenty[i].style.backgroundImage =
					"url(/img/shape5.png)";
			}
			else if (cardSideDisplayBackTwenty[i].textContent === "6") {
				cardSideDisplayBackTwenty[i].style.backgroundImage =
					"url(/img/shape6.png)";
			}
			else if (cardSideDisplayBackTwenty[i].textContent === "7") {
				cardSideDisplayBackTwenty[i].style.backgroundImage =
					"url(/img/shape7.png)";
			}
			else if (cardSideDisplayBackTwenty[i].textContent === "8") {
				cardSideDisplayBackTwenty[i].style.backgroundImage =
					"url(/img/shape8.png)";
			}
			else if (cardSideDisplayBackTwenty[i].textContent === "9") {
				cardSideDisplayBackTwenty[i].style.backgroundImage =
					"url(/img/shape9.png)";
			}
			else if (cardSideDisplayBackTwenty[i].textContent === "10") {
				cardSideDisplayBackTwenty[i].style.backgroundImage =
					"url(/img/shape10.png)";
			}
		}
	}
	else if (checkboxMedium.checked) {
		cardContainerForty.classList.toggle("display-none");
		cardPairsHiddenCounter = 20;
		const arr2 = [
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
		shuffle(arr2);
		console.log(arr2);

		for (let i = 0; i < arr2.length; i++) {
			cardSideDisplayBackForty[i].textContent = arr2[i];
			if (cardSideDisplayBackForty[i].textContent === "1") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape1.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "2") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape2.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "3") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape3.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "4") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape4.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "5") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape5.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "6") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape6.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "7") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape7.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "8") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape8.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "9") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape9.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "10") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape10.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "11") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape11.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "12") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape12.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "13") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape13.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "14") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape14.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "15") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape15.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "16") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape16.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "17") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape17.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "18") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape18.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "19") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape19.png)";
			}
			else if (cardSideDisplayBackForty[i].textContent === "20") {
				cardSideDisplayBackForty[i].style.backgroundImage =
					"url(/img/shape20.png)";
			}
		}
	}
	else if (checkboxHard.checked) {
		cardContainerSixty.classList.toggle("display-none");
		cardPairsHiddenCounter = 30;
		const arr3 = [
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
		shuffle(arr3);
		console.log(arr3);

		for (let i = 0; i < arr3.length; i++) {
			cardSideDisplayBackSixty[i].textContent = arr3[i];
			if (cardSideDisplayBackSixty[i].textContent === "1") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape1.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "2") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape2.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "3") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape3.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "4") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape4.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "5") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape5.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "6") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape6.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "7") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape7.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "8") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape8.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "9") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape9.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "10") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape10.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "11") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape11.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "12") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape12.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "13") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape13.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "14") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape14.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "15") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape15.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "16") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape16.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "17") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape17.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "18") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape18.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "19") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape19.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "20") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape20.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "21") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape21.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "22") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape22.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "23") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape23.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "24") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape24.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "25") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape25.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "26") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape26.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "27") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape27.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "28") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape28.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "29") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape29.png)";
			}
			else if (cardSideDisplayBackSixty[i].textContent === "30") {
				cardSideDisplayBackSixty[i].style.backgroundImage =
					"url(/img/shape30.png)";
			}
		}
	}

	// capture name and reset input value
	playerNameDislpay.textContent = nameInputDisplay.value;
	for (let i = 0; i < playerInfoItems.length; i++) {
		const element = playerInfoItems[i];
		element.classList.toggle("playerInfoItemFontDisplay");
	}
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
