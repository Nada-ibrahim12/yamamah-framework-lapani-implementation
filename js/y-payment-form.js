fetch("../../components/y-c-payment-form.html")
    .then((response) => response.text())
    .then((data) => {
        const form = document.querySelector('[data-y="payment-form"]');
        if (form) {
            form.innerHTML = data;
        }
    })
    .catch((err) => console.error("Error loading payment form:", err));



function toggleAddressField() {
    const container = document.getElementById("additionalAddressFields");
    const existingInput = document.getElementById("extraAddressField");
    const button = document.getElementById("toggleBtn");

    if (existingInput) {
        container.removeChild(existingInput);
        button.textContent = "+ اضافة شقة , الجناح , الوحدة , الخ";
    } else {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "extraAddressField";
        input.className = "form-control y-u-mb-5 custom-box";
        input.placeholder = "شقة , جناح , وحدة , الخ";
        container.appendChild(input);
        button.textContent = "✕ حذف الحقل";
    }
}