const navToggle = document.querySelector(".menu");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
