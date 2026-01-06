document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;
      startAuditClock();
    });
});

function startAuditClock(){
  const el = document.getElementById("auditTime");
  if(!el) return;
  const update = () => el.textContent = new Date().toLocaleString();
  update();
  setInterval(update, 60000);
}
