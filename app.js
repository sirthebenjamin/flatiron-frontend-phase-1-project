// Add click event listeners for the navigation links
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav a").forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute("href"));
        if (targetSection) {
          const headerOffset = 70;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition - headerOffset;
  
          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    });
  });