// Function to redirect to another page
function redirectTo(url) {
    window.location.href = url;
}

// Function to save form data to localStorage
function saveFormData() {
    const enrollment = document.querySelector('input[name="enrollment"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mobileNumber = document.querySelector('input[name="mobileNumber"]').value;  // Corrected
    const day = document.querySelector('select[name="day"]').value;
    const month = document.querySelector('select[name="month"]').value;
    const year = document.querySelector('select[name="year"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const nationality = document.querySelector('input[name="nationality"]:checked').value;
    const category = document.querySelector('input[name="category"]:checked').value;
    const disability = document.querySelector('input[name="disability"]:checked').value;
    const photoID = document.querySelector('select[name="photoId"]').value;  // Corrected
    const photoIDNumber = document.querySelector('input[name="photoIdNumber"]').value;  // Corrected
    const parentName = document.querySelector('input[name="parentName"]').value;  // Corrected
    const relationship = document.querySelector('select[name="relationship"]').value;
    const parentNationality = document.querySelector('input[name="parentNationality"]:checked').value;  // Corrected
    const parentMobile = document.querySelector('input[name="parentMobile"]').value;  // Corrected

    // Save data to localStorage using the specified method
    localStorage.setItem('enrollment', enrollment);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('mobileNumber', mobileNumber);
    localStorage.setItem('dob', JSON.stringify({ day, month, year }));  // Store DOB as an object
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

// Get the buttons
const previousBtn = document.querySelector('button:nth-of-type(1)');
const saveBtn = document.querySelector('button:nth-of-type(2)');
const nextBtn = document.querySelector('button:nth-of-type(3)');

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
