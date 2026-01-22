document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Header not found");
      }
      return response.text();
    })
    .then(data => {
      // Inject header
      document.getElementById("header-placeholder").innerHTML = data;

      // ✅ Auto-highlight active nav link (AFTER header loads)
      const currentPage = window.location.pathname.split("/").pop() || "index.html";
      const navLinks = document.querySelectorAll(".nav-links a");

      navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
          link.classList.add("active");
        }
      });
    })
    .catch(error => {
      console.error("Error loading header:", error);
    });
});
