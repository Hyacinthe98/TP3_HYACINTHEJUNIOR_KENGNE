// ===== survol Hover des cartes =====
document.querySelectorAll(".bouton-points").forEach((carte) => {
  carte.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.11)";
    this.style.transition = "transform 0.4s ease";
  });

  carte.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

// ===== Clic bouton "Nos Valeurs" =====
document.getElementById("bouton-points").addEventListener("click", function () {
  // Scroll vers la section points forts
  document.querySelector(".bg-point").scrollIntoView({
    behavior: "smooth",
  });
});
//===== Zoom image "hero" =====
document
  .getElementById("image-hero")
  .addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.4s ease";
  });

document
  .getElementById("image-hero")
  .addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
