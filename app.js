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
const cardSideDisplay = document.querySelectorAll(".card__side");

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
			cardSideDisplay[i].style.backgroundColor = "red";
			cardSideDisplay[i].classList.toggle("rotateCard");
		}
		if (counter === 0) {
			compareCardOneText = cardSideDisplay[i].textContent;
			console.log(compareCardOneText);
			cardNumOne = i;
			console.log(cardNumOne);
		}
		if (counter === 1) {
			compareCardTwoText = cardSideDisplay[i].textContent;
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
				cardSideDisplay[cardNumOne].style.backgroundColor =
					"rgb(35, 35, 35)";
				cardSideDisplay[cardNumTwo].style.backgroundColor =
					"rgb(35, 35, 35)";
				cardSideDisplay[cardNumOne].classList.toggle("rotateCard");
				cardSideDisplay[cardNumTwo].classList.toggle("rotateCard");
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
