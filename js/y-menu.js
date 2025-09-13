fetch("../../components/y-c-menu.html")
    .then((response) => response.text())
    .then((data) => {
        const menu = document.querySelector('[data-y="menu"]');
        if (menu) {
            menu.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading Menu section:", err));
