document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

      navMenu.classList.toggle("active");

      const expanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", !expanded);

    });

    navMenu.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

      });

    });

  }

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  }, {
    threshold: 0.15
  });

  document.querySelectorAll(
    ".section-heading, .card, .project-card, .about-grid, .contact-content"
  ).forEach((element) => {

    element.classList.add("reveal");
    observer.observe(element);

  });

});
