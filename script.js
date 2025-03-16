document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// function toggleMenu() {
//   document.querySelector("nav").classList.toggle("nav-active");
// }

// function toggleMenu() {
//   document.querySelector("nav").classList.toggle("nav-active");
//   document.querySelector(".hamburger").classList.toggle("active");
// }

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("nav-active");
  });
});
