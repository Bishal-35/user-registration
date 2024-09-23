// Function to redirect to another page
function redirectTo(url) {
    window.location.href = url;
}

// Get the buttons
const previousBtn = document.querySelector('button:nth-of-type(1)');
const saveBtn = document.querySelector('button:nth-of-type(2)');
const nextBtn = document.querySelector('button:nth-of-type(3)');

// Add event listeners to buttons
previousBtn.addEventListener('click', function () {
    redirectTo('personal.html');  // Redirect to personal.html
});

saveBtn.addEventListener('click', function () {
    saveFormData();  // Save form data to localStorage
});

nextBtn.addEventListener('click', function () {
    redirectTo('degree.html');  // Redirect to degree.html
});