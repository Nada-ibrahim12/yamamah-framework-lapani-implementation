fetch("../../components/y-c-who-us.html")
    .then((response) => response.text())
    .then((data) => {
        const who = document.querySelector('[data-y="who"]');
        if (who) {
            who.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading who us section:", err));
