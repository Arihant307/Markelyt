document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".service-box").forEach(box => {
    box.addEventListener("mouseenter", () => {
      box.style.transform = "translateY(-6px)";
      box.style.background = "#22d3ee";
      box.style.color = "#0a2540";
    });

    box.addEventListener("mouseleave", () => {
      box.style.transform = "translateY(0)";
      box.style.background = "#0f766e";
      box.style.color = "#e5f6ff";
    });
  });

  document.querySelectorAll(".industry-card").forEach(card => {
    card.addEventListener("click", () => {
      card.style.background = "#22d3ee";
      card.style.color = "#0a2540";
    });
  });

});
