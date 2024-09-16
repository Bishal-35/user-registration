// Simulate a registered user for demonstration purposes
const registeredUser = {
    username: 'user',
    password: 'pass123'
};

// Get references to the form and the message paragraph
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

// Add an event listener to handle form submission
loginForm.addEventListener('submit', function(event) {
    // Prevent form from submitting normally
    event.preventDefault();

    // Get the values entered by the user
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Check if the entered credentials match the registered user
    if (enteredUsername === registeredUser.username && enteredPassword === registeredUser.password) {
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Logged in successfully!';
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Invalid username or password.';
    }
});


// JavaScript for handling the redirection to registration.html
document.getElementById('registerBtn').addEventListener('click', function() {
    // Redirect to the registration page
    window.location.href = './elements/registration.html';
});

// Handle redirection to the registration page
document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = './elements/registration.html';
});
