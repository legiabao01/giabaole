document.addEventListener("DOMContentLoaded", function () {
  let backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
          backToTopButton.style.display = "block";
      } else {
          backToTopButton.style.display = "none";
      }
  });

  backToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

