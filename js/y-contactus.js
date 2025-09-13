fetch("../../components/y-c-contactus.html")
    .then((response) => response.text())
    .then((data) => {
        const contactus = document.querySelector('[data-y="contactus"]');
        if (contactus) {
            contactus.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading contactus:", err));
