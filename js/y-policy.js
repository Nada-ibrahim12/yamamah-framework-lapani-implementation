fetch("../../components/y-c-policy.html")
    .then((response) => response.text())
    .then((data) => {
        const policy = document.querySelector('[data-y="policy"]');
        if (policy) {
            policy.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading policy:", err));
