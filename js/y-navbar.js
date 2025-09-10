fetch("../../components/y-c-navbar.html")
  .then((response) => response.text())
  .then((data) => {
    const header = document.querySelector('[data-y="nav"]');
    if (header) {
      header.innerHTML = data;

      fetch("../../components/y-c-navbar-manifest.json")
        .then((res) => res.json())
        .then((manifest) => {
          if (manifest && manifest.slots) {
            // Example data for dynamic binding
            const navbarData = {
              "logo": { "src": "../../assets/logo.png", "href": "#" },
              "home-link": { "href": "/home.html", "text": "الصفحة الرئيسية" },
              "branches-link": { "href": "#", "text": "فروعنا" },
              "branch-alsafa": { "href": "single-branch.html?branch=alsafa", "text": "الصفا" },
              "branch-alzahraa": { "href": "single-branch.html?branch=alzahraa", "text": "الزهراء" },
              "contact-link": { "href": "/contact-us.html", "text": "تواصل معنا" },
              "phone-1": "0126780275",
              "phone-2": "0558842828"
            };

            Object.entries(manifest.slots).forEach(([key, selector]) => {
              const el = header.querySelector(selector);
              if (el && navbarData[key]) {
                const data = navbarData[key];
                if (typeof data === 'string') {
                  if (key.startsWith('phone-')) {
                    const textNode = el.firstChild;
                    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
                      textNode.textContent = data;
                    } else {
                      el.textContent = data;
                    }
                  } else {
                    el.textContent = data;
                  }
                } else if (typeof data === 'object') {
                  if (data.href) el.setAttribute('href', data.href);
                  if (data.src) el.setAttribute('src', data.src);
                  if (data.text) el.textContent = data.text;
                }
                el.setAttribute("data-dynamic", key);
              }
            });
          }
        })
        .catch((err) => console.error("Error loading navbar manifest:", err));
    }
  })
  .catch((err) => console.error("Error loading navbar:", err));
