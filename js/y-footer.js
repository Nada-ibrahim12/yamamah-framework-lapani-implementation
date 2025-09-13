fetch("../../components/y-c-footer.html")
    .then((response) => response.text())
    .then((data) => {
        const footer = document.querySelector('[data-y="footer"]');
        if (footer) {
            footer.innerHTML = data;
            // Add back-to-top functionality
            const backToTopBtn = document.querySelector('.back-to-top');
            if (backToTopBtn) {
                // Initially hide the button
                backToTopBtn.style.display = 'none';

                // Show/hide button based on scroll position
                window.addEventListener('scroll', function() {
                    if (window.scrollY > 100) {
                        backToTopBtn.style.display = 'flex';
                    } else {
                        backToTopBtn.style.display = 'none';
                    }
                });

                // Smooth scroll to top
                backToTopBtn.addEventListener('click', function() {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        }
    })
    .catch((err) => console.error("Error loading footer:", err));
