fetch("../../components/y-c-cart-table.html")
    .then((response) => response.text())
    .then((data) => {
        const table = document.querySelector('[data-y="cart-table"]');
        if (table) {
            table.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading Table:", err));
