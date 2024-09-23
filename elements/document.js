
// Function to redirect to another page
function redirectTo(url) {
    window.location.href = url;
}

// Function to save the form data to localStorage
function saveFormData() {
    const know = document.getElementById('know').value;
    if (!know) {
        alert('Please fill in the required information.');
        return; // Exit if the input is empty
    }

    // Save data in localStorage
    localStorage.setItem('knowAboutExam', know);
    alert('Data saved successfully!');
}

// Event listener for form submission
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Add any additional validation or data handling here
    saveFormData(); // Save data before submission (if needed)

    // Redirect to the declaration page
    redirectTo('declaration.html'); // Replace with the actual page you want to go to
});

// Get the buttons
const previousBtn = document.getElementById('previousBtn');
const saveBtn = document.getElementById('saveBtn');
const viewAppBtn = document.getElementById('viewAppBtn');

// Add event listeners to buttons
previousBtn.addEventListener('click', function () {
    redirectTo('degree.html');  // Replace with the actual previous page URL
});

saveBtn.addEventListener('click', function () {
    saveFormData();  // Save form data to localStorage
});

viewAppBtn.addEventListener('click', function () {
    redirectTo('view_application.html');  // Redirect to the view application page
});
