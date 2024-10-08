// Function to redirect to another page
function redirectTo(url) {
    window.location.href = url;
}

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
}

// Get the buttons
const previousBtn = document.querySelector('button:nth-of-type(1)');
const saveBtn = document.querySelector('button:nth-of-type(2)');
const nextBtn = document.querySelector('button:nth-of-type(3)');

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