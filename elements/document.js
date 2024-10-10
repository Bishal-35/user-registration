// Function to redirect to another page
function redirectTo(url) {
    window.location.href = url;
}

// Function to save the form data to localStorage
function saveFormData() {
    const know = document.getElementById('know').value;
    
    // Check if the "How did you know" field is filled
    if (!know) {
        alert('Please fill in the required information.');
        return false; // Return false if validation fails
    }

    // Save data in localStorage
    localStorage.setItem('knowAboutExam', know);
    alert('Data saved successfully!');
    return true; // Return true when the data is saved successfully
}

// Function to validate file inputs
function validateFileInput(input, required = true) {
    if (required && input.files.length === 0) {
        return false; // File is required but not uploaded
    }

    if (input.files.length > 0) {
        const file = input.files[0];
        const fileSizeKB = file.size / 1024;

        // Validate file size between 5KB and 600KB
        if (fileSizeKB < 5 || fileSizeKB > 600) {
            alert(`File size must be between 5KB and 600KB. File size of "${input.name}" is ${fileSizeKB.toFixed(2)}KB.`);
            return false;
        }
    }
    
    return true;
}

// Function to check if the form is fully valid
function checkFormValidity() {
    const photographInput = document.getElementById('photographInput');
    const signatureInput = document.getElementById('signatureInput');
    const know = document.getElementById('know').value;

    // Validate if required fields are filled
    const isPhotographValid = validateFileInput(photographInput);
    const isSignatureValid = validateFileInput(signatureInput);
    const isKnowValid = know.trim() !== '';

    // Enable or disable the submit button based on form validity
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = !(isPhotographValid && isSignatureValid && isKnowValid);
}

// Event listener for form submission
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate the file inputs
    const photographInput = document.getElementById('photographInput');
    const signatureInput = document.getElementById('signatureInput');
    
    if (!validateFileInput(photographInput) || !validateFileInput(signatureInput)) {
        return; // Stop submission if file validation fails
    }

    // Only save data and redirect if the form is valid
    if (saveFormData()) {
        redirectTo('declaration.html'); // Redirect to the next page
    }
});

// Get the buttons
const previousBtn = document.getElementById('previousBtn');
const saveBtn = document.getElementById('saveBtn');
const viewAppBtn = document.getElementById('viewAppBtn');
const submitBtn = document.getElementById('submitBtn');

// Disable the Submit button initially
submitBtn.disabled = true;

// Add event listeners to buttons
previousBtn.addEventListener('click', function () {
    redirectTo('degree.html');  // Redirect to the previous page
});

saveBtn.addEventListener('click', function () {
    saveFormData();  // Save form data to localStorage
});

// Add real-time validation for required file and select inputs
document.getElementById('photographInput').addEventListener('change', checkFormValidity);
document.getElementById('signatureInput').addEventListener('change', checkFormValidity);
document.getElementById('know').addEventListener('change', checkFormValidity);

// Initial validation check in case data is pre-filled
checkFormValidity();
