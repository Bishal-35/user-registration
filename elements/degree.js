// // Function to redirect to another page
// function redirectTo(url) {
//     window.location.href = url;
// }

// function saveFormData() {
//     const school_mat = document.getElementById('school-mat').value;
//     const city_mat = document.getElementById('city-mat').value;
//     const state_mat = document.getElementById('state-mat').value;
//     const pincode_mat = document.getElementById('pincode-mat').value;
//     const passed_mat = document.getElementById('passed-mat').value;
//     const marks_mat = document.getElementById('marks-mat').value;
    
//     const school_sec = document.getElementById('school-sec').value;
//     const city_sec = document.getElementById('city-sec').value;
//     const state_sec = document.getElementById('state-sec').value;
//     const pincode_sec = document.getElementById('pincode-sec').value;
//     const passed_sec = document.getElementById('passed-sec').value;
//     const marks_sec = document.getElementById('marks-sec').value;

//     localStorage.setItem('school-mat', school_mat);
//     localStorage.setItem('city-mat', city_mat);
//     localStorage.setItem('state-mat', state_mat);
//     localStorage.setItem('pincode-mat', pincode_mat);
//     localStorage.setItem('passed-mat', passed_mat);
//     localStorage.setItem('marks-mat', marks_mat);
    
//     localStorage.setItem('school-sec', school_sec);
//     localStorage.setItem('city-sec', city_sec);
//     localStorage.setItem('state-sec', state_sec);
//     localStorage.setItem('pincode-sec', pincode_sec);
//     localStorage.setItem('passed-sec', passed_sec);
//     localStorage.setItem('marks-sec', marks_sec);

//     alert('Form data saved successfully!');
// }

// // Get the buttons
// const previousBtn = document.querySelector('button:nth-of-type(1)');
// const saveBtn = document.querySelector('button:nth-of-type(2)');
// const nextBtn = document.querySelector('button:nth-of-type(3)');

// // Add event listeners to buttons
// previousBtn.addEventListener('click', function () {
//     redirectTo('address.html');  // Redirect to address.html
// });

// saveBtn.addEventListener('click', function () {
//     saveFormData();  // Save form data to localStorage
// });

// nextBtn.addEventListener('click', function () {
//     redirectTo('document.html');  // Redirect to document.html
// });


// Function to save form data to localStorage
function saveFormData() {
    const school_mat = document.getElementById('school-mat').value;
    const city_mat = document.getElementById('city-mat').value;
    const state_mat = document.getElementById('state-mat').value;
    const pincode_mat = document.getElementById('pincode-mat').value;
    const passed_mat = document.getElementById('passed-mat').value;
    const marks_mat = document.getElementById('marks-mat').value;

    const school_sec = document.getElementById('school-sec').value;
    const city_sec = document.getElementById('city-sec').value;
    const state_sec = document.getElementById('state-sec').value;
    const pincode_sec = document.getElementById('pincode-sec').value;
    const passed_sec = document.getElementById('passed-sec').value;
    const marks_sec = document.getElementById('marks-sec').value;

    // Check if required fields are filled
    if (!school_mat || !pincode_mat || !school_sec || !pincode_sec) {
        alert('Please fill in the required fields!');
        return;
    }

    // Save form data to localStorage
    localStorage.setItem('school-mat', school_mat);
    localStorage.setItem('city-mat', city_mat);
    localStorage.setItem('state-mat', state_mat);
    localStorage.setItem('pincode-mat', pincode_mat);
    localStorage.setItem('passed-mat', passed_mat);
    localStorage.setItem('marks-mat', marks_mat);

    localStorage.setItem('school-sec', school_sec);
    localStorage.setItem('city-sec', city_sec);
    localStorage.setItem('state-sec', state_sec);
    localStorage.setItem('pincode-sec', pincode_sec);
    localStorage.setItem('passed-sec', passed_sec);
    localStorage.setItem('marks-sec', marks_sec);

    alert('Form data saved successfully!');
    checkFormValidity(); // Check form validity after saving
}

// Function to check if all required fields are filled and data is saved
function checkFormValidity() {
    const school_mat = document.getElementById('school-mat').value;
    const pincode_mat = document.getElementById('pincode-mat').value;
    const school_sec = document.getElementById('school-sec').value;
    const pincode_sec = document.getElementById('pincode-sec').value;

    // Check if all required fields are filled
    const isFormFilled = school_mat && pincode_mat && school_sec && pincode_sec;

    // Check if form data is saved in localStorage
    const isDataSaved = localStorage.getItem('school-mat') && localStorage.getItem('school-sec');

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

// Add event listeners to form inputs to check validity when input changes
document.getElementById('school-mat').addEventListener('input', checkFormValidity);
document.getElementById('pincode-mat').addEventListener('input', checkFormValidity);
document.getElementById('school-sec').addEventListener('input', checkFormValidity);
document.getElementById('pincode-sec').addEventListener('input', checkFormValidity);

// Function to redirect to another page
function redirectTo(url) {
    window.location.href = url;
}

// Get the buttons
const previousBtn = document.querySelector('button:nth-of-type(1)');
const saveBtn = document.querySelector('button:nth-of-type(2)');

// Add event listeners to buttons
previousBtn.addEventListener('click', function () {
    redirectTo('address.html');  // Redirect to address.html
});

saveBtn.addEventListener('click', function () {
    saveFormData();  // Save form data to localStorage
});

nextBtn.addEventListener('click', function () {
    redirectTo('document.html');  // Redirect to document.html
});
