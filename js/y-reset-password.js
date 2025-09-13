fetch("../../components/y-c-reset-password.html")
    .then((response) => response.text())
    .then((data) => {
        const reset_password = document.querySelector('[data-y="reset-password"]');
        if (reset_password) {
            reset_password.innerHTML = data;

            const resetBtn = reset_password.querySelector('.reset-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', function() {
                    const formDiv = reset_password.querySelector('#reset-form');
                    const successDiv = reset_password.querySelector('#reset-success');
                    if (formDiv && successDiv) {
                        formDiv.style.display = 'none';
                        successDiv.style.display = 'block';
                    }
                });
            }
        }
    })
    .catch((err) => console.error("Error loading reset_password:", err));

