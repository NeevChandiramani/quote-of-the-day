// script.js

async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/quotes/random");
        if (!response.ok) {
            throw new Error(`Failed to fetch quote: ${response.statusText}`);
        }
        const [data] = await response.json(); // API returns an array with one quote
        return {
            content: data.content,
            author: data.author
        };
    } catch (error) {
        console.error(error);
        return {
            content: "Failed to fetch quote. Please try again later.",
            author: "Error"
        };
    }
}

async function displayQuote() {
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const {content, author} = await fetchQuote();
    
    quoteElement.innerText = `"${content}"`;
    authorElement.innerText = `- ${author}`;
}

window.addEventListener('DOMContentLoaded', (event) => {
    displayQuote();
});

// Update date and time
function updateDateTime() {
    const now = new Date();
    const dateTimeDiv = document.getElementById('date-time');
    dateTimeDiv.innerHTML = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
}

window.onload = function() {
    updateDateTime();
    // Update time every second
    setInterval(updateDateTime, 1000);
};
