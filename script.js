// Smooth scroll button
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Navbar toggle (responsive)
// Toggle menu for smaller screens
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// Fade-in when scrolling
const sections = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.2;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add("visible");
  });
});

