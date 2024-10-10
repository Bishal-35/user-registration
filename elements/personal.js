// Function to redirect to another page
function redirectTo(url) {
    window.location.href = url;
}

// Function to generate enrollment ID
function generateEnrollmentID() {
    const name = document.querySelector('input[name="name"]').value.trim();
    const day = document.querySelector('select[name="day"]').value;
    const month = document.querySelector('select[name="month"]').value;
    const year = document.querySelector('select[name="year"]').value;

    if (name.length >= 3 && day && month && year) {
        // Get the first three letters of the name and combine with birthdate and year
        const namePart = name.substring(0, 3).toUpperCase();
        const dobPart = `${day}${month}${year}`;
        const enrollmentID = `${namePart}${dobPart}`;

        // Set the generated enrollment ID and disable editing
        const enrollmentField = document.querySelector('input[name="enrollment"]');
        enrollmentField.value = enrollmentID;
        enrollmentField.disabled = true;
    }

    checkFormValidity();  // Check form validity every time an input changes
}

// Function to save form data to localStorage
function saveFormData() {
    const enrollment = document.querySelector('input[name="enrollment"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mobileNumber = document.querySelector('input[name="mobileNumber"]').value;
    const day = document.querySelector('select[name="day"]').value;
    const month = document.querySelector('select[name="month"]').value;
    const year = document.querySelector('select[name="year"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const nationality = document.querySelector('input[name="nationality"]:checked').value;
    const category = document.querySelector('input[name="category"]:checked').value;
    const disability = document.querySelector('input[name="disability"]:checked').value;
    const photoID = document.querySelector('select[name="photoId"]').value;
    const photoIDNumber = document.querySelector('input[name="photoIdNumber"]').value;
    const parentName = document.querySelector('input[name="parentName"]').value;
    const relationship = document.querySelector('select[name="relationship"]').value;
    const parentNationality = document.querySelector('input[name="parentNationality"]:checked').value;
    const parentMobile = document.querySelector('input[name="parentMobile"]').value;

    // Save data to localStorage
    localStorage.setItem('enrollment', enrollment);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('mobileNumber', mobileNumber);
    localStorage.setItem('dob', JSON.stringify({ day, month, year }));
    localStorage.setItem('gender', gender);
    localStorage.setItem('nationality', nationality);
    localStorage.setItem('category', category);
    localStorage.setItem('disability', disability);
    localStorage.setItem('photoID', photoID);
    localStorage.setItem('photoIDNumber', photoIDNumber);
    localStorage.setItem('parentName', parentName);
    localStorage.setItem('relationship', relationship);
    localStorage.setItem('parentNationality', parentNationality);
    localStorage.setItem('parentMobile', parentMobile);

    alert('Form data saved successfully!');
    checkFormValidity();  // Re-check validity after saving data
}

// Function to check if all required fields are filled and data is saved
function checkFormValidity() {
    const enrollment = document.querySelector('input[name="enrollment"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mobileNumber = document.querySelector('input[name="mobileNumber"]').value;
    const day = document.querySelector('select[name="day"]').value;
    const month = document.querySelector('select[name="month"]').value;
    const year = document.querySelector('select[name="year"]').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const nationality = document.querySelector('input[name="nationality"]:checked');
    const category = document.querySelector('input[name="category"]:checked');
    const disability = document.querySelector('input[name="disability"]:checked');
    const photoID = document.querySelector('select[name="photoId"]').value;
    const photoIDNumber = document.querySelector('input[name="photoIdNumber"]').value;
    const parentName = document.querySelector('input[name="parentName"]').value;
    const relationship = document.querySelector('select[name="relationship"]').value;
    const parentNationality = document.querySelector('input[name="parentNationality"]:checked');
    const parentMobile = document.querySelector('input[name="parentMobile"]').value;

    // Check if all fields are filled
    const isFormFilled = name && email && mobileNumber && day && month && year &&
                         gender && nationality && category && disability &&
                         photoID && photoIDNumber && parentName && relationship &&
                         parentNationality && parentMobile;

    // Check if form data is saved in localStorage
    const isDataSaved = localStorage.getItem('enrollment');

    // Enable the Next button only if form is fully filled and data is saved
    const nextBtn = document.querySelector('button:nth-of-type(3)');
    if (isFormFilled && isDataSaved) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
}

// Populate the day dropdown on mouseover
document.getElementById('day').addEventListener('focus', function () {
    const daySelect = document.getElementById('day');
    if (daySelect.options.length <= 1) {  // Only populate if not already populated
        for (let i = 1; i <= 31; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.text = i;
            daySelect.appendChild(option);
        }
    }
});

// Pre-populate year dropdown
const yearSelect = document.getElementById('year');
let currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1900; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}

// Add event listeners to name, day, month, and year fields to generate enrollment ID when all values are provided
document.querySelector('input[name="name"]').addEventListener('input', generateEnrollmentID);
document.querySelector('select[name="day"]').addEventListener('change', generateEnrollmentID);
document.querySelector('select[name="month"]').addEventListener('change', generateEnrollmentID);
document.querySelector('select[name="year"]').addEventListener('change', generateEnrollmentID);

// Get the buttons
const previousBtn = document.querySelector('button:nth-of-type(1)');
const saveBtn = document.querySelector('button:nth-of-type(2)');
const nextBtn = document.querySelector('button:nth-of-type(3)');

// Disable the Next button initially
nextBtn.disabled = true;

// Add event listeners to buttons
previousBtn.addEventListener('click', function () {
    redirectTo('exam.html');  // Redirect to exam.html
});

saveBtn.addEventListener('click', function () {
    saveFormData();  // Save form data to localStorage
});

nextBtn.addEventListener('click', function () {
    redirectTo('address.html');  // Redirect to address.html
});
