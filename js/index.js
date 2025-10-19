if (window.location.pathname.includes("contact.html")) {
  document
    .querySelector(".contact-formulaire")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      document.querySelector(".contact-form").style.display = "none";

      document.getElementById("confirmation").style.display = "block";

      console.log("📧 Formulaire contact soumis avec succès");
    });

  document
    .querySelectorAll(
      ".contact-formulaire input, .contact-formulaire textarea, .contact-formulaire select"
    )
    .forEach((champ) => {
      champ.addEventListener("input", function () {
        if (this.value.trim() !== "") {
          this.style.borderColor = "#f302ff";
        } else {
          this.style.borderColor = "#dc3545";
        }
      });
    });

  //  Animation du bouton Envoyer
  document
    .getElementById("bouton-envoyer")
    .addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
      this.style.transition = "transform 0.3s ease";
    });

  document
    .getElementById("bouton-envoyer")
    .addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });

  console.log("🎯 JavaScript contact activé");
}
