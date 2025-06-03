const toggleBtn = document.getElementById("theme-toggle");
const htmlTag = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const currentTheme = htmlTag.getAttribute("data-theme");
  htmlTag.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
});
