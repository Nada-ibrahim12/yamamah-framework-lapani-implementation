fetch("../../components/y-c-ad-container.html")
    .then((response) => response.text())
    .then((data) => {
        const ad1 = document.querySelector('[data-y="ad-container"]');
        if (ad1) {
            ad1.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading advertisement:", err));
