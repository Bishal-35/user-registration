// Function to redirect to another page
function redirectTo(url) {
    window.location.href = url;
}

// Get the elements
const previousBtn = document.getElementById('previousBtn');
const submitBtn = document.getElementById('submitBtn');
const checkbox = document.querySelector("input[type='checkbox']");

// Disable the submit button initially
submitBtn.disabled = true;

// Add event listener to enable/disable submit button based on checkbox state
checkbox.addEventListener('change', function() {
    submitBtn.disabled = !checkbox.checked; // Enable button if checkbox is checked
});

// Add event listeners to buttons
previousBtn.addEventListener('click', function () {
    redirectTo('document.html');  // Replace with the actual previous page URL
});

submitBtn.addEventListener('click', function () {
    if (checkbox.checked) {
        redirectTo('payment.html');  // Redirect to the payment page
    }
});
