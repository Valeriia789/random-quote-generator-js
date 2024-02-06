import quotes from "../data/quotes.json" assert { type: "json" };
console.log(quotes);

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];
  return randomQuote;
}

//Function to select random rgb color value (except light colors, rgb not 255)
function getRandomColor() {
  const red = Math.floor(Math.random() * 230);
  const green = Math.floor(Math.random() * 230);
  const blue = Math.floor(Math.random() * 230);
  const randomColor = "rgb(" + red + "," + green + "," + blue + ")";
  return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object
function printQuote() {
  const quotes = getRandomQuote();
  const quoteContainer = document.getElementById("quote-box");
  let quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;

  quoteContainer.innerHTML = quoteString;

  //assigns random color value to document background color
  document.body.style.backgroundColor = getRandomColor();
}

//Quote automatically refreshes every 15 seconds
// window.setInterval(function () {
//   printQuote();
// }, 15000);

//Event listener on LoadQuote button to generate new quote
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
