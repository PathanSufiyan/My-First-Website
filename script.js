// Yeh code tab chalega jab poora page load ho jaye
window.addEventListener("DOMContentLoaded", () => {
  
  // ===== Typewriter Effect =====
  // Pehle <h1> ko pakad lega (chahe text "New Starting" ya kuch bhi ho)
  const heading = document.querySelector("h1");  
  if (heading) {
    const text = heading.textContent;  // h1 ka asli text
    heading.textContent = "";          // clear kardo
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70); // speed (70ms per character)
      }
    }
    typeWriter();
  }

  // ===== Dark Mode Toggle =====
  const btn = document.querySelector("#darkModeBtn"); // button jiska id darkModeBtn hai
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // button ka text change kar do
      if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Light Mode";
      } else {
        btn.textContent = "🌙 Dark Mode";
      }
    });
  }
});
