document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;
      startAuditClock();
      loadTidioChatbot(); // ✅ load chatbot safely
    });
});

function startAuditClock() {
  const el = document.getElementById("auditTime");
  if (!el) return;

  const update = () => {
    el.textContent = new Date().toLocaleString();
  };

  update();
  setInterval(update, 60000);
}

/* ================== TIDIO CHATBOT LOADER ================== */
function loadTidioChatbot() {
  // Prevent duplicate loading
  if (document.getElementById("tidio-chatbot")) return;

  const script = document.createElement("script");
  script.id = "tidio-chatbot";
  script.src = "//code.tidio.co/jqaqytsgbxalyhcbvfllf0nebhdkfjcm.js";
  script.async = true;

  document.body.appendChild(script);
}
