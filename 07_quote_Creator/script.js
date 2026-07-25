const api_url="https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
async function getquote(){

    const response=await fetch(api_url);

    const data=await response.json();

    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

getquote();
function post() {
    const tweet = `"${quote.innerHTML}" - ${author.innerHTML}`;

    const twitterUrl =
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;

    window.open(twitterUrl, "_blank");
}