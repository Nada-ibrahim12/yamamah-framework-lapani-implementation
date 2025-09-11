fetch("../../components/y-c-header.html")
    .then((response) => response.text())
    .then((data) => {
        const header = document.querySelector('[data-y="header"]');
        if (header) {
            header.innerHTML = data;
            const script = document.createElement("script");
            script.src = "../../js/y-header.js";
            document.body.appendChild(script);
        }
    })
    .catch((err) => console.error("Error loading header:", err));
