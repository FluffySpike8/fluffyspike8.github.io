document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

function toggleMenu() {
    document.querySelector('nav').classList.toggle('nav-active');
  }
  