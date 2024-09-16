document.getElementById('day').addEventListener('mouseover', function () {
    const daySelect = document.getElementById('day');
    if (daySelect.options.length <= 1) {  // Only populate if not already populated
        for (let i = 1; i <= 31; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.text = i;
            daySelect.appendChild(option);
        }
    }
});

// Pre-populate year dropdown
const yearSelect = document.getElementById('year');
let currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1900; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}