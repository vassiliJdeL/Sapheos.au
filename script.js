document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle (To be implemented fully if more complex logic needed, for now placeholder)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active'); // Optional: for burger animation
        });
    }

    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(drop => {
        const toggle = drop.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    // Close other dropdowns
                    dropdowns.forEach(d => {
                        if (d !== drop) d.classList.remove('active');
                    });
                    drop.classList.toggle('active');
                }
            });
        }
    });

    // Keep demo behavior only for login form.
    const loginForm = document.querySelector('form');
    if (loginForm) {
        const loginBtn = loginForm.querySelector('button[type="submit"]');
        if (loginBtn && loginBtn.textContent.includes('Sign In')) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const originalText = loginBtn.textContent;
                loginBtn.textContent = 'Logging in...';
                setTimeout(() => {
                    alert("This is a demo. In a real app, you would be logged in!");
                    loginBtn.textContent = originalText;
                }, 500);
            });
        }
    }
});
