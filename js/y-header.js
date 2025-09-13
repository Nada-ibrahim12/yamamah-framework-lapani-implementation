fetch("../../components/y-c-header.html")
    .then((response) => response.text())
    .then((data) => {
        const header = document.querySelector('[data-y="header"]');
        if (header) {
            header.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading header:", err));
