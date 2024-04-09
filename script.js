// script.js

async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) {
            throw new Error(`Failed to fetch quote: ${response.statusText}`);
        }
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error(error);
        return "Failed to fetch quote. Please try again later.";
    }
}

async function displayQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = await fetchQuote();
}

window.addEventListener('DOMContentLoaded', (event) => {
    displayQuote();
});

window.onload = function() {
    var now = new Date();
    var dateTimeDiv = document.getElementById('date-time');
    dateTimeDiv.innerHTML = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
};