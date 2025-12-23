document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".marketing-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px)";
      card.style.background = "#22d3ee";
      card.style.color = "#0a2540";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.background = "#0f766e";
      card.style.color = "#e5f6ff";
    });
  });

  const cta = document.querySelector(".cta-btn");
  cta.addEventListener("mouseenter", () => {
    cta.style.transform = "scale(1.05)";
  });
  cta.addEventListener("mouseleave", () => {
    cta.style.transform = "scale(1)";
  });

});
