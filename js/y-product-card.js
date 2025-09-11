fetch("../../components/y-c-product-card.html")
    .then((response) => response.text())
    .then((data) => {
        const header = document.querySelector('[data-y="product-card"]');
        if (header) {
            header.innerHTML = data;
            const script = document.createElement("script");
            script.src = "../../js/y-product-card.js";
            document.body.appendChild(script);
        }
    })
    .catch((err) => console.error("Error loading product card:", err));

