const input = document.querySelector("input");

document.addEventListener("keyup", (e) => {
    if (e.ctrlKey && e.key === "/") {
        input.focus();
    }
});
