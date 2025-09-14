fetch("../../components/y-c-cart-summary.html")
    .then((response) => response.text())
    .then((data) => {
        const summary = document.querySelector('[data-y="cart-summary"]');
        if (summary) {
            summary.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading summary:", err));
