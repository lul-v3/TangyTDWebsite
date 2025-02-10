const screenshots = [
    "assets/img/screenshots/screenshot_1.jpg",
    "assets/img/screenshots/screenshot_2.jpg",
    "assets/img/screenshots/screenshot_3.jpg",
    "assets/img/screenshots/screenshot_4.jpg",
    "assets/img/screenshots/screenshot_5.jpg",
    "assets/img/screenshots/screenshot_6.jpg",
    "assets/img/screenshots/screenshot_7.jpg",
    "assets/img/screenshots/screenshot_8.jpg"
];
let currentIndex = 0;
const screenshotElement = document.getElementById("screenshot");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % screenshots.length;
    updateImage();
});

prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
    updateImage();
});

function updateImage() {
    screenshotElement.classList.add("opacity-0");
    setTimeout(() => {
        screenshotElement.src = screenshots[currentIndex];
        screenshotElement.classList.remove("opacity-0");
    }, 200);
}

function loadFirstImage() {
    updateImage();
}

loadFirstImage();