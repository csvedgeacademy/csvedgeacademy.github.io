const POSTER_DATA = {
  academyName: "CSV Edge Academy",

  headline: "Computerized System Validation (CSV)",
  subHeadline: "Industry-Focused Online Certification Program",
  tagline: "From Fresher to Industry-Ready CSV Professional",

  industries: "Pharmaceutical • Life Sciences • Biotech • Medical Devices • IT",

  schedule: "Live Sessions | Mon–Fri | 08:00–09:00 PM (IST)",

  idealFor: [
    "Freshers entering Pharma / IT Validation",
    "QA, QC, RA, CSV & IT Professionals",
    "Life Sciences professionals strengthening GxP expertise"
  ],

  duration: "30 Days • 20+ Live Sessions",
  features: [
    "Hands-on validation documents",
    "One-to-one query resolution",
    "Daily assessments",
    "Mock interviews & resume prep",
    "Free Jira Software Training"
  ],

  price: "₹7,999",
  batch: "April 2026 Batch",
  trust: "Aligned with GAMP 5 & FDA Expectations",

  links: {
    enroll: "https://csvedgeacademy.github.io/contact.html",
    whatsapp: "https://api.whatsapp.com/send/?phone=9665942334",
    email: "mailto:csvedgeacademy@gmail.com",
    linkedin: "https://www.linkedin.com/company/111385921/admin/dashboard/"
  }
};

/* Populate content */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    el.innerText = POSTER_DATA[key];
  });

  const ideal = document.getElementById("idealFor");
  POSTER_DATA.idealFor.forEach(i => {
    ideal.innerHTML += `<li>${i}</li>`;
  });

  const feats = document.getElementById("features");
  POSTER_DATA.features.forEach(f => {
    feats.innerHTML += `<li>${f}</li>`;
  });
});

/* Download Poster */
function downloadPoster() {
  html2canvas(document.getElementById("poster")).then(canvas => {
    const link = document.createElement("a");
    link.download = "CSV_Edge_Academy_Poster.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
