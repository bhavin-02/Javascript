const div = document.querySelector("div");

window.addEventListener("scroll", () => {
    // Get relevant properties from document.documentElement
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    div.style.width = `${scrolled}%`;
});
