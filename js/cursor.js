document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursor");
  if (!cursor) {
    console.error("Element #cursor not found");
    return;
  }

  cursor.innerHTML = `
    <svg viewBox="0 0 122.88 122.88"
         preserveAspectRatio="xMidYMid meet"
         xmlns="http://www.w3.org/2000/svg"
         width="100%" height="100%" class="cursor-svg">
      <path d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34
               C30.27,68.47,16.16,62.43,0,62.43v-1.98
               c16.16,0,30.27-6.04,42.34-18.14
               C54.41,30.21,60.45,16.1,60.45,0h1.98
               c0,16.15,6.04,30.27,18.11,42.34
               c12.07,12.07,26.18,18.11,42.34,18.11v1.98
               c-16.15,0-30.27,6.04-42.34,18.11
               C68.47,92.61,62.43,106.72,62.43,122.88z"/>
    </svg>
  `;

  // Show/hide cursor on document enter/leave
  document.addEventListener("mouseenter", () => {
    cursor.style.display = "inline";
  });
  document.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });

  // Move cursor
  document.addEventListener("mousemove", (e) => {
    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;
    cursor.style.left = (e.pageX - cursorWidth / 2) + 'px';
    cursor.style.top = (e.pageY - cursorHeight / 2) + 'px';
  });

  // Hover effect
  const hoverables = [...document.querySelectorAll("a, button")];
  hoverables.forEach(el => {
    el.addEventListener("mouseover", () => {
      cursor.classList.add("hover");
      cursor.style.transform = "rotate(315deg)";
      cursor.style.width = "25px";
      cursor.style.height = "25px";
    });
    el.addEventListener("mouseout", () => {
      cursor.classList.remove("hover");
      cursor.style.transform = "rotate(0deg)";
      cursor.style.width = "35px";
      cursor.style.height = "35px";
    });
  });
});
