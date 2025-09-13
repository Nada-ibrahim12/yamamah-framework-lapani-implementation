fetch("../../components/y-c-top-products.html")
    .then((response) => response.text())
    .then((data) => {
        const topProducts = document.querySelector('[data-y="top-products"]');
        if (topProducts) {
            topProducts.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading Top products section:", err));
