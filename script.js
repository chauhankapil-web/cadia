// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Small animation for header title
const headerTitle = document.querySelector("header h1");
headerTitle.addEventListener("mouseover", () => {
  headerTitle.style.color = "gold";
});
headerTitle.addEventListener("mouseout", () => {
  headerTitle.style.color = "white";
});
