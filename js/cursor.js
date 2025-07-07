document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursor");
  if (!cursor) {
    console.error("Element #cursor not found");
    return;
  }

  cursor.innerHTML = `
<svg viewBox="0 0 122.88 122.88"
 fill="#00FFFF" preserveAspectRatio="xMidYMid meet"
     xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
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

// Force fill color for any <path> or <g> elements
cursor.querySelectorAll('path, g, svg').forEach(el => {
  el.setAttribute('fill', '#00FFFF');
});
console.log("Injected SVG:", cursor.innerHTML);

      document.addEventListener("mousemove", (e) => {
        const w = cursor.offsetWidth;
        const h = cursor.offsetHeight;
        cursor.style.transform = `translate(${e.clientX - w / 2}px, ${e.clientY - h / 2}px)`;
      });
    })
    .catch(err => {
      console.error("SVG load failed:", err);
    });

