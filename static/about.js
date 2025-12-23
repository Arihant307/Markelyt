document.addEventListener("DOMContentLoaded", () => {

  const missionImg = document.querySelector(".mission-img");
  const visionImg = document.querySelector(".vision-img");
  const ctaBtn = document.querySelector(".cta-btn");

  // Image hover animation
  [missionImg, visionImg].forEach(img => {
    if (img) {
      img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.03)";
        img.style.transition = "0.4s ease";
      });

      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
      });
    }
  });

  // CTA button interaction
  if (ctaBtn) {
    ctaBtn.addEventListener("mouseenter", () => {
      ctaBtn.style.transform = "translateY(-3px)";
      ctaBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
    });

    ctaBtn.addEventListener("mouseleave", () => {
      ctaBtn.style.transform = "translateY(0)";
      ctaBtn.style.boxShadow = "none";
    });
  }

});
