const nameInputDisplay = document.querySelector(".nameInputDisplay");
const playerNameDislpay = document.querySelector(".playerNameDisplay");
const gameDifficultyCheckboxes = document.querySelector(
	".gameDifficultyCheckboxes"
);
const loadGameBtn = document.querySelector(".loadGameBtn");
const resetAndShuffleBtn = document.querySelector(".resetAndShuffleBtn");
const newPlayerBtn = document.querySelector(".newPlayerBtn");
const cardDisplay = document.querySelectorAll(".cardDisplay");
const cardContainer = document.querySelector(".card-container");
const cardSideDisplayFront = document.querySelectorAll(".card__side--front");
const cardSideDisplayBack = document.querySelectorAll(".card__side--back");
const counterDisplay = document.querySelector(".counter--display");

loadGameBtn.addEventListener("click", function() {
	playerNameDislpay.textContent = nameInputDisplay.value;
	nameInputDisplay.style.display = "none";
	gameDifficultyCheckboxes.style.display = "none";
	loadGameBtn.style.display = "none";
	resetAndShuffleBtn.style.display = "block";
	newPlayerBtn.style.display = "block";
});

newPlayerBtn.addEventListener("click", function() {
	playerNameDislpay.textContent = "___enter new player name";
	nameInputDisplay.style.display = "block";
	gameDifficultyCheckboxes.style.display = "block";
	loadGameBtn.style.display = "block";
	resetAndShuffleBtn.style.display = "none";
	newPlayerBtn.style.display = "none";
});

let clickCount = 0;
let clickCounter = 0;
let counter = 0;
let compareCardOneText = "";
let compareCardTwoText = "";
let cardNumOne = 0;
let cardNumTwo = 0;
for (let i = 0; i < cardDisplay.length; i++)
	cardDisplay[i].addEventListener("click", function() {
		clickCount++;
		console.log("clickCount = " + clickCount);
		if (counter <= 1) {
			// cardSideDisplay[i].style.backgroundColor = "red";
			cardSideDisplayFront[i].classList.toggle("rotateCard180");
			cardSideDisplayBack[i].classList.toggle("rotateCard0");
		}
		if (counter === 0) {
			compareCardOneText = cardSideDisplayBack[i].textContent;
			console.log(compareCardOneText);
			cardNumOne = i;
			console.log(cardNumOne);
		}
		if (counter === 1) {
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
			compareCardTwoText = cardSideDisplayBack[i].textContent;
			console.log(compareCardTwoText);
			cardNumTwo = i;
			console.log(cardNumTwo);
			if (compareCardOneText === compareCardTwoText) {
				setTimeout(function() {
					cardDisplay[cardNumOne].style.visibility = "hidden";
					cardDisplay[cardNumTwo].style.visibility = "hidden";
				}, 1000);
			}

			setTimeout(function() {
				counter = 0;
				compareCardOneText = "";
				compareCardTwoText = "";
				// cardSideDisplay[cardNumOne].style.backgroundColor =
				// 	"rgb(35, 35, 35)";
				// cardSideDisplay[cardNumTwo].style.backgroundColor =
				// 	"rgb(35, 35, 35)";
				cardSideDisplayFront[cardNumOne].classList.toggle(
					"rotateCard180"
				);
				cardSideDisplayBack[cardNumOne].classList.toggle("rotateCard0");
				cardSideDisplayFront[cardNumTwo].classList.toggle(
					"rotateCard180"
				);
				cardSideDisplayBack[cardNumTwo].classList.toggle("rotateCard0");
				cardNumOne = 0;
				cardNumTwo = 0;
				console.log("Counter should be -1 = " + counter);
				console.log(
					"CompareCardOneText should be empty = " +
						'"' +
						compareCardOneText +
						'"'
				);
				console.log(
					"CompareCardTwoText should be empty = " +
						'"' +
						compareCardTwoText +
						'"'
				);
				console.log(
					"CardNumOne should be empty = " + '"' + cardNumOne + '"'
				);
				console.log(
					"CardNumTwo should be empty = " + '"' + cardNumTwo + '"'
				);
			}, 2000);
		}
		counter++;
		console.log("Counter is now = " + counter);
	});

/////////////////////////////////////////////////////////////
// TIMER
/////////////////////////////////////////////////////////////
const minhand = document.querySelector(".minhand");
const sechand = document.querySelector(".sechand");

let minclick = 0;
let click = 0;
setInterval(() => {
	click++;
	// console.log(click);
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
