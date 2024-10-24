// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Function to check password strength
    function validatePasswordStrength(password) {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength) {
            return 'Password must be at least 8 characters long.';
        }
        if (!hasUppercase) {
            return 'Password must contain at least one uppercase letter.';
        }
        if (!hasNumber) {
            return 'Password must contain at least one number.';
        }
        if (!hasSpecialChar) {
            return 'Password must contain at least one special character.';
        }
        return ''; // Password is strong
    }

    // Function to handle form submission
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form values
        const firstName = document.getElementById('firstname').value.trim();
        const middleName = document.getElementById('middlename').value.trim();
        const surname = document.getElementById('surname').value.trim();
        const fullName = document.getElementById('fullname').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm_password').value.trim();

        // Validate the mandatory fields
        if (!firstName || !surname || !fullName) {
            alert('Please fill in all the mandatory fields.');
            return;
        }

        // Validate password strength
        const passwordStrengthError = validatePasswordStrength(password);
        if (passwordStrengthError) {
            alert(passwordStrengthError);
            return;
        }

        // Validate that passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please check both password fields.');
            return;
        }

        // Store the form values in local storage (except password for security reasons)
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('middleName', middleName);
        localStorage.setItem('surname', surname);
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('password', password);

        // Display an alert that the data has been stored
        alert('Registration data successfully stored!');

        // Redirect to exam.html
        window.location.href = './exam.html';
    });

    // Automatically populate the full name field when the first name, middle name, or surname changes
    const firstNameInput = document.getElementById('firstname');
    const middleNameInput = document.getElementById('middlename');
    const surnameInput = document.getElementById('surname');
    const fullNameInput = document.getElementById('fullname');

    function updateFullName() {
        const fullName = `${firstNameInput.value.trim()} ${middleNameInput.value.trim()} ${surnameInput.value.trim()}`.trim();
        fullNameInput.value = fullName;
    }

    // Listen for changes in the first name, middle name, or surname fields
    firstNameInput.addEventListener('input', updateFullName);
    middleNameInput.addEventListener('input', updateFullName);
    surnameInput.addEventListener('input', updateFullName);
});
