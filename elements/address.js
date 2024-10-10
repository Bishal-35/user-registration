// // Function to save form data to localStorage
// function saveFormData() {
//     const pincode = document.getElementById('pincode').value;
//     const country = document.getElementById('country').value;
//     const state = document.getElementById('state').value;
//     const address1 = document.getElementById('address1').value;
//     const address2 = document.getElementById('address2').value;
//     const address3 = document.getElementById('address3').value;
//     const city = document.getElementById('city').value;

//     if (!pincode || !address1) {
//         alert('Please fill in the required fields!');
//         return;
//     }

//     // localStorage.setItem('', );
//     localStorage.setItem('pincode', pincode);
//     localStorage.setItem('country', country);
//     localStorage.setItem('state', state);
//     localStorage.setItem('address1', address1);
//     localStorage.setItem('address2', address2);
//     localStorage.setItem('address3', address3);
//     localStorage.setItem('city', city);
    
//     // Alert to confirm that the data has been saved
//     alert('Form data saved successfully!');
// }

// // Function to redirect to another page
// function redirectTo(url) {
//     window.location.href = url;
// }

// // Get the buttons
// const previousBtn = document.querySelector('button:nth-of-type(1)');
// const saveBtn = document.querySelector('button:nth-of-type(2)');
// const nextBtn = document.querySelector('button:nth-of-type(3)');

// // Add event listeners to buttons
// previousBtn.addEventListener('click', function () {
//     redirectTo('personal.html');  // Redirect to personal.html
// });

// saveBtn.addEventListener('click', function () {
//     saveFormData();  // Save form data to localStorage
// });

// nextBtn.addEventListener('click', function () {
//     redirectTo('degree.html');  // Redirect to degree.html
// });


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

    // Save data to localStorage
    localStorage.setItem('pincode', pincode);
    localStorage.setItem('country', country);
    localStorage.setItem('state', state);
    localStorage.setItem('address1', address1);
    localStorage.setItem('address2', address2);
    localStorage.setItem('address3', address3);
    localStorage.setItem('city', city);

    // Alert to confirm that the data has been saved
    alert('Form data saved successfully!');
    checkFormValidity();  // Check form validity after saving data
}

// Function to check if all required fields are filled and data is saved
function checkFormValidity() {
    const pincode = document.getElementById('pincode').value;
    const address1 = document.getElementById('address1').value;

    // Check if all required fields are filled
    const isFormFilled = pincode && address1;

    // Check if form data is saved in localStorage
    const isDataSaved = localStorage.getItem('pincode');

    // Enable the Next button only if form is fully filled and data is saved
    const nextBtn = document.querySelector('button:nth-of-type(3)');
    if (isFormFilled && isDataSaved) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
}

// Disable the Next button initially
const nextBtn = document.querySelector('button:nth-of-type(3)');
nextBtn.disabled = true;

// Function to redirect to another page
function redirectTo(url) {
    window.location.href = url;
}

// Add event listeners to form inputs to check validity when input changes
document.getElementById('pincode').addEventListener('input', checkFormValidity);
document.getElementById('address1').addEventListener('input', checkFormValidity);

// Get the buttons
const previousBtn = document.querySelector('button:nth-of-type(1)');
const saveBtn = document.querySelector('button:nth-of-type(2)');

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
