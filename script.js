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

    // Handle Form Submissions (Mockup)
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');

            // Check if it's the login form
            const isLogin = btn.textContent.includes('Sign In');
            const originalText = btn.textContent;

            if (isLogin) {
                btn.textContent = 'Logging in...';
                setTimeout(() => {
                    alert("This is a demo. In a real app, you would be logged in!");
                    btn.textContent = originalText;
                }, 500);
            } else {
                btn.textContent = 'Message Sent! ✅';
                btn.style.backgroundColor = '#10b981'; // Green
                btn.style.borderColor = '#10b981';

                // Optional: Alert for more visibility
                setTimeout(() => {
                    alert("Thank you! We have received your request.");

                    // Reset button after partial delay
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.backgroundColor = '';
                        btn.style.borderColor = '';
                        form.reset();
                    }, 2000);
                }, 100);
            }
        });
    });
});
