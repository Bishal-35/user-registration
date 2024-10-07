// Function to save form data to localStorage
function saveFormData() {
    const pincode = document.getElementById('pincode').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const address1 = document.getElementById('address1').value;
    const address2 = document.getElementById('address2').value;
    const address3 = document.getElementById('address3').value;
    const city = document.getElementById('city').value;

    if (!pincode || !address1) {
        alert('Please fill in the required fields!');
        return;
    }

    const formData = {
        pincode,
        country,
        state,
        address1,
        address2,
        address3,
        city
    };
    // Store the form data in localStorage as a JSON string
    localStorage.setItem('addressFormData', JSON.stringify(formData));
    
    // Alert to confirm that the data has been saved
    alert('Form data saved successfully!');
}

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


