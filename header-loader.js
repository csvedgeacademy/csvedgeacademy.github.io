document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("header-placeholder");
  if (!placeholder) return;

  fetch("header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Header not found");
      }
      return response.text();
    })
    .then(html => {
      placeholder.innerHTML = html;

      // Highlight active menu item
      const currentPage = location.pathname.split("/").pop() || "index.html";
      document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    })
    .catch(error => {
      console.error("Error loading header:", error);
    });
});
