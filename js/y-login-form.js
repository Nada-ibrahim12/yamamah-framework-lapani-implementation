fetch("../../components/y-c-login-form.html")
    .then((response) => response.text())
    .then((data) => {
        const form = document.querySelector('[data-y="login-form"]');
        if (form) {
            form.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading login form:", err));

