fetch("../../components/y-c-menu.html")
    .then((response) => response.text())
    .then((data) => {
        const header = document.querySelector('[data-y="menu"]');
        if (header) {
            header.innerHTML = data;
            const script = document.createElement("script");
            script.src = "../../js/y-menu.js";
            document.body.appendChild(script);
        }
    })
    .catch((err) => console.error("Error loading Menu section:", err));
