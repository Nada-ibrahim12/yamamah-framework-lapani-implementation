fetch("../../components/y-c-navbar.html")
  .then((response) => response.text())
  .then((data) => {
    const navbar = document.querySelector('[data-y="nav"]');
    if (navbar) {
      navbar.innerHTML = data;
    }
  })
  .catch((err) => console.error("Error loading navbar:", err));
