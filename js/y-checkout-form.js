fetch("../../components/y-c-checkout-form.html")
    .then((response) => response.text())
    .then((data) => {
        const form = document.querySelector('[data-y="checkout-form"]');
        if (form) {
            form.innerHTML = data;

            const noteCheckbox = document.getElementById('note-checkbox');
            const noteText = document.getElementById('note-text');

            if (noteCheckbox && noteText) {
                noteCheckbox.addEventListener('change', () => {
                    noteText.style.display = noteCheckbox.checked ? 'block' : 'none';
                });
            }
        }
    })
    .catch((err) => console.error("Error loading check form:", err));
