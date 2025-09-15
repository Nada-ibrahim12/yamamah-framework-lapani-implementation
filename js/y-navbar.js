fetch("../../components/y-c-navbar.html")
  .then((response) => response.text())
  .then((data) => {
    const navbar = document.querySelector('[data-y="nav"]');
    if (navbar) {
      navbar.innerHTML = data;

      initNavbarToggle();
    }
  })
  .catch((err) => console.error("Error loading navbar:", err));

function initNavbarToggle() {
  const toggler = document.querySelector(".y-c-navbar__toggler");
  const collapse = document.querySelector("#navbarContent");
  const navLinks = collapse.querySelectorAll("a"); 

  if (!toggler || !collapse) {
    console.error("Navbar toggler or collapse not found after load!");
    return;
  }

  function checkScreen() {
    if (window.innerWidth < 992) {
      collapse.style.display = "none";
    } else {
      collapse.style.display = "flex";
    }
  }

  checkScreen();
  window.addEventListener("resize", checkScreen);

  toggler.addEventListener("click", function () {
    if (collapse.style.display === "none" || collapse.style.display === "") {
      collapse.style.display = "flex";
    } else {
      collapse.style.display = "none";
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        collapse.style.display = "none";
      }
    });
  });
}
