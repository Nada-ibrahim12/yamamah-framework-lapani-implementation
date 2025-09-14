fetch("../../components/y-c-checkout-form.html")
    .then((response) => response.text())
    .then((data) => {
        const form = document.querySelector('[data-y="checkout-form"]');
        if (form) {
            form.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading check form:", err));

