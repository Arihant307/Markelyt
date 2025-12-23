document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px)";
      card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });

  const cta = document.querySelector(".cta-btn");
  if (cta) {
    cta.addEventListener("mouseenter", () => {
      cta.style.transform = "translateY(-3px)";
    });
    cta.addEventListener("mouseleave", () => {
      cta.style.transform = "translateY(0)";
    });
  }

});
