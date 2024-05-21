document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const targetSection = link.getAttribute('href').substring(1); 
            document.getElementById(targetSection).scrollIntoView({
                behavior: 'smooth' 
            });
        });
    });

    const navBar = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
            navBar.classList.add('scrolled'); 
        } else {
            navBar.classList.remove('scrolled'); 
        }
    });
});


