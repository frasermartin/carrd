document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copyright-year")
    .forEach(el => {
      const year = new Date().getFullYear();
      const siteTitle = document.title;

      el.textContent = `© ${year} ${siteTitle}`;
    });
});
