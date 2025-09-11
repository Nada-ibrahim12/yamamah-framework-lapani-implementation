fetch("../../components/y-c-top-products.html")
    .then((response) => response.text())
    .then((data) => {
        const header = document.querySelector('[data-y="top-products"]');
        if (header) {
            header.innerHTML = data;
            const script = document.createElement("script");
            script.src = "../../js/y-top-products.js";
            document.body.appendChild(script);
        }
    })
    .catch((err) => console.error("Error loading Top products section:", err));
