// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#575757';
            link.style.transition = 'background-color 0.3s ease';
        });

        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = '';
        });
    });
});
