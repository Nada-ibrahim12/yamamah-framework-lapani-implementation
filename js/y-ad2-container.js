fetch("../../components/y-c-ad2-container.html")
    .then((response) => response.text())
    .then((data) => {
        const header = document.querySelector('[data-y="ad2-container"]');
        if (header) {
            header.innerHTML = data;
            const script = document.createElement("script");
            script.src = "../../js/y-ad2-container.js";
            document.body.appendChild(script);
        }
    })
    .catch((err) => console.error("Error loading Ad2 Container section:", err));
