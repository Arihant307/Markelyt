document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  const btn = document.getElementById("strategyBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      window.location.href = "/contact/";
    });
  }
});
