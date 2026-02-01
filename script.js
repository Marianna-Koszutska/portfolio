document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Smooth Scrolling
  ========================= */
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* =========================
     Carousel Functionality
  ========================= */
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const images = carousel.querySelector(".carousel-images");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    if (!images || !prevBtn || !nextBtn) return;

    const imageCount = images.children.length;
    let index = 0;

    const updateCarousel = () => {
      images.style.transform = `translateX(-${index * 100}%)`;
    };

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + imageCount) % imageCount;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % imageCount;
      updateCarousel();
    });
  });

  /* =========================
     Fullscreen Sketch View
  ========================= */
  const overlay = document.getElementById("fullscreen-overlay");
  const fullscreenImg = document.getElementById("fullscreen-image");
  const captionEl = document.querySelector(".fullscreen-caption");
  const closeBtn = document.querySelector(".close-fullscreen");

  document.querySelectorAll(".sketch-item").forEach((item) => {
    item.addEventListener("click", () => {
      if (!overlay || !fullscreenImg) return;

      fullscreenImg.src = item.dataset.fullsize;
      if (captionEl) {
        captionEl.textContent = item.querySelector("img")?.alt || "";
      }

      overlay.style.display = "flex";
    });
  });

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  }

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.style.display = "none";
      }
    });
  }

  /* =========================
     Mobile Video Fallback
  ========================= */
  if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const videoBg = document.querySelector(".video-background");
    if (videoBg) {
      videoBg.innerHTML = `
        <img 
          src="assets/images/fallback.jpg" 
          alt="Background"
          style="width:100%; height:100%; object-fit:cover;"
        >
      `;
    }
  }

});
