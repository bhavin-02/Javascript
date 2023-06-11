const browseButton = document.querySelector("#browse-button");
const pickColor = document.querySelector("#pick-color");
const file = document.querySelector("#file");
const urlInput = document.querySelector("#url");
const image = document.querySelector("img");
const hexColorText = document.querySelector("p");

browseButton.addEventListener("click", () => file.click());

file.addEventListener("change", (e) => {
    image.src = URL.createObjectURL(e.target.files[0]);
});

urlInput.addEventListener("change", (e) => {
    image.src = e.target.value;
});

const pickColorFromImage = async () => {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    hexColorText.textContent = sRGBHex;
    console.log(sRGBHex);
};

pickColor.addEventListener("click", pickColorFromImage);
