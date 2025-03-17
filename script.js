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
  const navLinks = document.querySelectorAll("nav ul li a"); // Select all menu links

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("nav-active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      nav.classList.remove("nav-active");
    });
  });
});

function loadFontAwesome() {
  const link = document.createElement("link");
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
  link.rel = "stylesheet";
  link.type = "text/css";
  document.head.appendChild(link);
}

// Load Font Awesome after the page has loaded
if (window.addEventListener) {
  window.addEventListener("load", loadFontAwesome, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", loadFontAwesome);
}
