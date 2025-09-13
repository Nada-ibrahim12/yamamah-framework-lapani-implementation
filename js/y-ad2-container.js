fetch("../../components/y-c-ad2-container.html")
    .then((response) => response.text())
    .then((data) => {
        const ad2 = document.querySelector('[data-y="ad2-container"]');
        if (ad2) {
            ad2.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading Ad2 Container section:", err));
