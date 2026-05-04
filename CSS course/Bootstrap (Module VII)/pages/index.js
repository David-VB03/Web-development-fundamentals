    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('mainNavbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'white';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            // Cambiar color del texto a oscuro
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.style.color = '#333');
            const brand = document.querySelector('.navbar-brand');
            brand.style.color = '#333';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
            // Volver texto a blanco
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.style.color = 'white');
            const brand = document.querySelector('.navbar-brand');
            brand.style.color = 'white';
        }
    });