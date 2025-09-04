const galleryContainer = document.querySelectorAll("gallery-grid");
const galleryGrid = document.getElementById("gallery-grid");
const closeOverlay = document.getElementById("close-overlay");
const expandedImage = document.getElementById("expanded-image");
const toggleOverlay = document.getElementById("toggle-overlay");
const overlay = document.getElementById("overlay");
const fullscreenButton = document.getElementById("fullscreen-button");
let currentlyOpenedImage = {};
let isFullscreened = 0;

galleryGrid.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery-images")) {
    const imagesrc = event.target.src;
    expandImage(imagesrc);
    // currentlyOpenedImage = event.target;
  }
});

overlay.addEventListener("click", () => {
  isFullscreened = 0;
  expandedImage.style.maxWidth = "70%";
  expandedImage.style.maxHeight = "50%";
  toggleOverlay.style.display = "none";
});

closeOverlay.addEventListener("click", () => {
  isFullscreened = 0;
  expandedImage.style.maxWidth = "70%";
  expandedImage.style.maxHeight = "50%";
  toggleOverlay.style.display = "none";
});

fullscreenButton.addEventListener("click", () => {
  fullscreenImage();
});

function expandImage(imagesrc) {
  expandedImage.src = imagesrc;
  toggleOverlay.style.display = "block";
}

function fullscreenImage() {
  isFullscreened++;
  if (isFullscreened % 2 !== 0 && isFullscreened !== 0) {
    expandedImage.style.maxWidth = "100%";
    expandedImage.style.maxHeight = "100%";
    console.log("on");
  } else if (isFullscreened % 2 === 0) {
    expandedImage.style.maxWidth = "70%";
    expandedImage.style.maxHeight = "50%";
    console.log("off");
  }
}
