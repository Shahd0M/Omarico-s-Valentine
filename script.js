"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const sImg = document.querySelector(".s-img");

const MAX_IMAGES = 6;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! <br> Since the day we met, you’ve made my world brighter❤️ <br> So glad to call you mine Happy Valentine's Day Habeby😘 ";
  


  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.4;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const
   messages = [
    "No",
    "Since 2019?? fr??",
    "2020 you were literally stuck with me, no refund🤭",
    "2021 still annoying you daily🤪",
    "2023 I'm gonna cry...",
    "2024 you’re still choosing me right?❤️",
    "2025 Ma enta hados yes ghasb hehehe😂",
    
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  sImg.src = `img/s-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
