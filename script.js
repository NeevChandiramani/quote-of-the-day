// script.js

async function fetchQuote() {
    try {
        const response = await fetch("https://favqs.com/api/qotd", {
            headers: {
                Authorization: "Token token=8b88065fa84c357478646a5c219c43aa"
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch quote: ${response.statusText}`);
        }
        const data = await response.json();
        return data.quote.body;
    } catch (error) {
        console.error(error);
        return "Failed to fetch quote. Please try again later.";
    }
}

async function displayQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = await fetchQuote();
}

displayQuote();
