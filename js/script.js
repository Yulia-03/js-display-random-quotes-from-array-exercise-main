"use strict";
const quotes = [
  "The best way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "In the middle of every difficulty lies opportunity.",
  "Do one thing every day that scares you.",
];

let remainingQuotes = [...quotes];

function getRandomQuote() {
  if (quotes.length === 0) {
    return "No quotes available";
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayRandomQuote() {
  const randomQuote = getRandomQuote();
  const quoteElement = document.getElementById("quotes");
  quoteElement.textContent = randomQuote;
}
const button = document.getElementById("displayQuoteBtn");
button.addEventListener("click", displayRandomQuote);
