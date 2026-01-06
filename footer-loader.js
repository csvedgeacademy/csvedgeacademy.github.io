document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => {
      if (!res.ok) throw new Error("Footer not found");
      return res.text();
    })
    .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;
      startFooterClock();
    })
    .catch(err => console.error("Footer load error:", err));
});

/* Audit clock */
function startFooterClock(){
  const el = document.getElementById("auditTime");
  if(!el) return;

  function update(){
    el.textContent = new Date().toLocaleString();
  }
  update();
  setInterval(update, 60000);
}
