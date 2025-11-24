import "bootstrap";
import "./style.css";

const suits = ["♥️", "♣️", "♦️", "♠️"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getRandomElement(array) {
  let index = Math.floor(Math.random() * array.length)
  let randomElement = array[index]
  return(randomElement)
}

function updateCard() {
  const randomSuit = getRandomElement(suits);
  const randomRank = getRandomElement(ranks);

  const rank = document.getElementById("rank");
  const suit_top = document.getElementById("suit-top");
  const suit_bottom = document.getElementById("suit-bottom");

  rank.innerHTML = randomRank;
  suit_top.innerHTML = randomSuit;
  suit_bottom.innerHTML = randomSuit;
}

window.onload = updateCard;

document.getElementById("new-card").addEventListener("click", updateCard);
