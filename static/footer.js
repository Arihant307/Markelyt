document.addEventListener("DOMContentLoaded", function () {

  // ===== Footer Year =====
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== Scroll To Top Button =====
  var scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {

    // show / hide button on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    // scroll to top on click
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

});

// document.addEventListener("DOMContentLoaded", function () {

//   const form = document.getElementById("newsletterForm");
//   const msg = document.getElementById("newsletterMsg");

//   if (form) {
//     form.addEventListener("submit", function (e) {
//       e.preventDefault();

//       const formData = new FormData(form);

//       fetch("/subscribe", {
//         method: "POST",
//         body: formData,
//         headers: {
//           "X-Requested-With": "XMLHttpRequest"
//         }
//       })
//       .then(res => res.json())
//       .then(data => {
//         msg.innerText = data.msg;
//         msg.style.color = data.status === "success" ? "lightgreen" : "orange";
//         form.reset();
//       });
//     });
//   }

// });

// // document.addEventListener("DOMContentLoaded", function () {

// //   const form = document.getElementById("newsletterForm");
// //   const msg = document.getElementById("newsletterMsg");

// //   if (!form) return;

// //   form.addEventListener("submit", function (e) {
// //     e.preventDefault();   // ⛔ STOP default GET submit

// //     const formData = new FormData(form);

// //     fetch("/subscribe/", {
// //       method: "POST",
// //       body: formData,
// //       headers: {
// //         "X-Requested-With": "XMLHttpRequest"
// //       }
// //     })
// //     .then(res => res.json())
// //     .then(data => {
// //       msg.innerText = data.msg;
// //       msg.style.color =
// //         data.status === "success" ? "lightgreen" : "orange";
// //       form.reset();
// //     });
// //   });

// // });


