fetch("../../components/y-c-note-textarea.html")
    .then((response) => response.text())
    .then((data) => {
        const note = document.querySelector('[data-y="note-textarea"]');
        if (note) {
            note.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading note:", err));
