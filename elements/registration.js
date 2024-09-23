// Get the form element
const form = document.getElementById('registrationForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Check if the form is valid
    if (form.checkValidity()) {
        // Redirect to exam.html
        window.location.href = 'exam.html';
    } else {
        // If form is not valid, show default validation error
        form.reportValidity();
    }
});

