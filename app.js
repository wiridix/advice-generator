const idTitle = document.getElementById("id");
const quote = document.getElementById("quote");
const btn = document.getElementById("btn-random");

const url = "https://api.adviceslip.com/advice";

async function fetchAdvice() {
    const res = await fetch(url);
    const data = await res.json();
    const { id, advice } = data.slip;

    idTitle.innerHTML = `#${id}`;
    quote.innerHTML = `“${advice}”`;
}

window.addEventListener("DOMContentLoaded", () => {
    fetchAdvice();
});

btn.addEventListener("click", () => {
    fetchAdvice();
});
