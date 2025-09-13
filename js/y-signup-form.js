fetch("../../components/y-c-signup-form.html")
    .then((response) => response.text())
    .then((data) => {
        const form = document.querySelector('[data-y="signup-form"]');
        if (form) {
            form.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading signup form:", err));

