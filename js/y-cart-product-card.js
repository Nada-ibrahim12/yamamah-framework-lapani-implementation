fetch("../../components/y-c-cart-product-card.html")
    .then((response) => response.text())
    .then((data) => {
        const card = document.querySelector('[data-y="cart-product-card"]');
        if (card) {
            card.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading product card:", err));

