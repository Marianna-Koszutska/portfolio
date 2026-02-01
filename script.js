// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


// Image carousel functionality - fixed version
document.querySelectorAll(".carousel").forEach((carousel) => {
  const images = carousel.querySelector(".carousel-images");
  const imageCount = images.children.length;
  let index = 0;

  const updateCarousel = () => {
    images.style.transform = `translateX(-${index * 100}%)`;
  };

  carousel.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + imageCount) % imageCount;
    updateCarousel();
  });

  carousel.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % imageCount;
    updateCarousel();
  });
});

// Open fullscreen view for sketches
document.querySelectorAll(".sketch-item").forEach((item) => {
  item.addEventListener("click", function () {
    const fullsizeImage = this.getAttribute("data-fullsize");
    const caption = this.querySelector("img").alt;

    // Set the fullsize image and caption in the fullscreen view
    document.getElementById("fullscreen-image").src = fullsizeImage;
    document.querySelector(".fullscreen-caption").textContent = caption;

    // Show the fullscreen view
    document.getElementById("fullscreen-overlay").style.display = "flex";
  });
});

// Close the fullscreen view when clicking on the close button
document.querySelector(".close-fullscreen").addEventListener("click", function () {
  document.getElementById("fullscreen-overlay").style.display = "none";
});

// Close the fullscreen view if clicking outside the image
document.getElementById("fullscreen-overlay").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
  // Detect mobile devices and replace video with image if needed
if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  const videoBg = document.querySelector('.video-background');
  videoBg.innerHTML = '<img src="fallback-image.jpg" alt="Background" style="width:100%;height:100%;object-fit:cover;">';
}
});
