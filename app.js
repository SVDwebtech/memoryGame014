const nameInputDisplay = document.querySelector(".nameInputDisplay");
const playerNameDislpay = document.querySelector(".playerNameDisplay");
const gameDifficultyCheckboxes = document.querySelector(
	".gameDifficultyCheckboxes"
);
const loadGameBtn = document.querySelector(".loadGameBtn");
const resetAndShuffleBtn = document.querySelector(".resetAndShuffleBtn");
const newPlayerBtn = document.querySelector(".newPlayerBtn");

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
