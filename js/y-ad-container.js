fetch("../../components/y-c-ad-container.html")
    .then((response) => response.text())
    .then((data) => {
        const header = document.querySelector('[data-y="ad-container"]');
        if (header) {
            header.innerHTML = data;
            const script = document.createElement("script");
            script.src = "../../js/y-ad-container.js";
            document.body.appendChild(script);
        }
    })
    .catch((err) => console.error("Error loading advertisement:", err));
