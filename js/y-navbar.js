fetch("../../components/y-c-navbar.html")
  .then((response) => response.text())
  .then((data) => {
    const header = document.querySelector('[data-y="nav"]');
    if (header) {
      header.innerHTML = data;
      const script = document.createElement("script");
      script.src = "../../js/y-navbar.js";
      document.body.appendChild(script);
    }
  })
  .catch((err) => console.error("Error loading navbar:", err));
