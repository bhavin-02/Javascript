const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", () => {
    fetch("http://api.quotable.io/random?tags=technology,famous-quotes")
        .then((res) => res.json())
        .then((data) => {
            p.innerText = data.content;
        })
        .catch(() => alert("Something went wrong while generating quote"));
});
