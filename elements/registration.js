// // Get the form element
// const form = document.getElementById('registrationForm');

// // Add event listener for form submission
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Check if the form is valid
//     if (form.checkValidity()) {
//         // Redirect to exam.html
//         window.location.href = 'exam.html';
//     } else {
//         // If form is not valid, show default validation error
//         form.reportValidity();
//     }
// });


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
    window.location.href = 'confirmation.html';
});
