// Function to handle form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const firstName = document.getElementById('firstname').value;
    const middleName = document.getElementById('middlename').value;
    const surname = document.getElementById('surname').value;
    const fullName = document.getElementById('fullname').value;

    // Create an object to hold the form data
    const registrationData = {
        firstName,
        middleName,
        surname,
        fullName
    };

    // Save the data to localStorage
    localStorage.setItem('registrationData', JSON.stringify(registrationData));

    // Redirect to another page (e.g., confirmation page)

    window.location.href = './elements/exam.html';
});
