const images = [
    "media1/kg2.PNG",
    "media1/mollie.PNG",
    "media1/shark.PNG",
    "media1/kg.PNG",
    "media1/pingu.PNG",
    "media1/country.PNG",
    "media1/dogs.PNG"
];

const home = document.getElementById("home");
const slideshow = document.getElementById("slideshow");
const slideImage = document.getElementById("slideImage");
const startBtn = document.getElementById("startBtn");

let currentIndex = 0;
let slideshowInterval;

startBtn.addEventListener("click", () => {
    home.style.display = "none";
    slideshow.style.display = "block";
    currentIndex = 0;
    showImage();
    slideshowInterval = setInterval(nextImage, 5000);
});

function showImage() {
    slideImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        clearInterval(slideshowInterval);
        returnHome();
    } else {
        showImage();
    }
}

function returnHome() {
    slideshow.style.display = "none";
    home.style.display = "flex";
}
