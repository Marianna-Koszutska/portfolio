// =========================
// Smooth scrolling for navigation
// =========================

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});


// =========================
// Image carousel functionality
// =========================

document.querySelectorAll(".carousel").forEach((carousel) => {

  const images = carousel.querySelector(".carousel-images");

  if (!images) return;

  const imageCount = images.children.length;
  let index = 0;


  const updateCarousel = () => {
    images.style.transform = `translateX(-${index * 100}%)`;
  };


  const prevButton = carousel.querySelector(".prev");
  const nextButton = carousel.querySelector(".next");


  if (prevButton) {
    prevButton.addEventListener("click", () => {
      index = (index - 1 + imageCount) % imageCount;
      updateCarousel();
    });
  }


  if (nextButton) {
    nextButton.addEventListener("click", () => {
      index = (index + 1) % imageCount;
      updateCarousel();
    });
  }

});


// =========================
// Open fullscreen view for sketches
// =========================

document.querySelectorAll(".sketch-item").forEach((item) => {

  item.addEventListener("click", function () {

    const fullsizeImage = this.getAttribute("data-fullsize");
    const image = this.querySelector("img");

    const caption = image ? image.alt : "";


    const fullscreenImage = document.getElementById("fullscreen-image");
    const fullscreenCaption = document.querySelector(".fullscreen-caption");
    const fullscreenOverlay = document.getElementById("fullscreen-overlay");


    if (fullscreenImage && fullscreenOverlay) {

      fullscreenImage.src = fullsizeImage;

      if (fullscreenCaption) {
        fullscreenCaption.textContent = caption;
      }

      fullscreenOverlay.style.display = "flex";

    }

  });

});


// =========================
// Close fullscreen view
// =========================

const closeButton = document.querySelector(".close-fullscreen");
const fullscreenOverlay = document.getElementById("fullscreen-overlay");


if (closeButton && fullscreenOverlay) {

  closeButton.addEventListener("click", function () {
    fullscreenOverlay.style.display = "none";
  });


  fullscreenOverlay.addEventListener("click", function (e) {

    if (e.target === this) {
      this.style.display = "none";
    }

  });

}


// =========================
// Mobile video replacement
// =========================

if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  const videoBg = document.querySelector(".video-background");


  if (videoBg) {

    videoBg.innerHTML = `
      <img 
        src="assets/fallback-image.jpg" 
        alt="Background"
        style="width:100%;height:100%;object-fit:cover;"
      >
    `;

  }

}


// =========================
// Custom cursor
// =========================

const cursor = document.querySelector(".custom-cursor");


if (cursor) {


  document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

  });



  document.querySelectorAll("a, button, .carousel-btn").forEach((element) => {


    element.addEventListener("mouseenter", () => {

      cursor.classList.add("hover");

    });



    element.addEventListener("mouseleave", () => {

      cursor.classList.remove("hover");

    });


  });


}