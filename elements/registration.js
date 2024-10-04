// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Function to handle form submission
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form values
        const firstName = document.getElementById('firstname').value.trim();
        const middleName = document.getElementById('middlename').value.trim();
        const surname = document.getElementById('surname').value.trim();
        const fullName = document.getElementById('fullname').value.trim();

        // Validate the mandatory fields
        if (!firstName || !surname || !fullName) {
            alert('Please fill in all the mandatory fields.');
            return;
        }

        // Redirect to exam.html
        window.location.href = './exam.html';
    });

    // Automatically populate the full name field when the first name, middle name, or surname changes
    const firstNameInput = document.getElementById('firstname');
    const middleNameInput = document.getElementById('middlename');
    const surnameInput = document.getElementById('surname');
    const fullNameInput = document.getElementById('fullname');

    function updateFullName() {
        const fullName = `${firstNameInput.value.trim()} ${middleNameInput.value.trim()} ${surnameInput.value.trim()}`.trim();
        fullNameInput.value = fullName;
    }

    // Listen for changes in the first name, middle name, or surname fields
    firstNameInput.addEventListener('input', updateFullName);
    middleNameInput.addEventListener('input', updateFullName);
    surnameInput.addEventListener('input', updateFullName);
});
