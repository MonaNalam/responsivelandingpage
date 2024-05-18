// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            const nav = document.getElementById("navbar");
            const navLinks = document.querySelectorAll(".nav-link");

            window.addEventListener("scroll", function() {
                if (window.scrollY > 50) {
                    nav.classList.add("scrolled");
                } else {
                    nav.classList.remove("scrolled");
                }
            });

            navLinks.forEach(link => {
                link.addEventListener("mouseenter", function() {
                    this.style.backgroundColor = "#575757";
                });

                link.addEventListener("mouseleave", function() {
                    this.style.backgroundColor = "";
                });
            });
        })
        .catch(error => console.error('Error loading navigation:', error));
});
