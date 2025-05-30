// Placeholder for interactive features. You can enhance this based on your future needs.

document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded and DOM fully parsed.");

  // Example: Scroll to top button logic
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
