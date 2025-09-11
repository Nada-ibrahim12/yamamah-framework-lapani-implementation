fetch("../../components/y-c-who-us.html")
    .then((response) => response.text())
    .then((data) => {
        const header = document.querySelector('[data-y="who"]');
        if (header) {
            header.innerHTML = data;
            const script = document.createElement("script");
            script.src = "../../js/y-who-us.js";
            document.body.appendChild(script);
        }
    })
    .catch((err) => console.error("Error loading who us section:", err));
