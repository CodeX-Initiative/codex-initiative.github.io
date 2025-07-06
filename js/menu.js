document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  const toggleBtn = document.getElementById("menu-toggle");
  const sideMenu = document.getElementById("side-menu");
  const closeBtn = document.querySelector(".close-btn");

  toggleBtn.addEventListener("click", () => sideMenu.classList.add("open"));
  closeBtn.addEventListener("click", () => sideMenu.classList.remove("open"));
});
// Optional: Close sidebar when clicking outside it
document.addEventListener("click", function (e) {
  const sidebar = document.getElementById("side-menu");
  const toggle = document.getElementById("menu-toggle");
  if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
    sidebar.classList.remove("open");
  }
});
