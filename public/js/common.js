document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copyright-year")
    .forEach(el => {
      const year = new Date().getFullYear();
      const siteTitle = el.dataset.siteTitle;

      el.textContent = `© ${year} ${siteTitle}`;
    });
});
