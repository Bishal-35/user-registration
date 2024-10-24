


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("input[type='text']"); // Enrollment ID input
    const passwordInput = document.querySelector("input[type='password']");
    const rememberMeCheckbox = document.getElementById("rememberMe");

    //Pre-fill the username if it's saved in sessionStorage
    // const savedUsername = sessionStorage.getItem("enrollment");
    // if (savedUsername) {
    //     usernameInput.value = savedUsername; // Set the input value to saved username
    //     rememberMeCheckbox.checked = true; // Check the checkbox
    // }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from submitting and refreshing the page

        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        //set item in sessionStorage
        // const enrollment = document.getElementById('enrollment').value.trim();

        // sessionStorage.setItem('enrollment', enrollment)

        // Retrieve credentials from localStorage
        const storedUsername = localStorage.getItem("enrollment");
        const storedPassword = localStorage.getItem("password");

        // Check if credentials exist in localStorage
        if (!storedUsername || !storedPassword) {
            alert('No records found! Please Register first.');
            window.location.reload(); // Refresh the page after showing the alert
            return;
        }

        // Validate the enrollment ID and password
        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
            // Successful login, display success message and redirect
            showSuccessMessage("Successfully Logged in!!")

            setTimeout(function () {
                window.location.href = "./elements/app_print.html";// Redirect to app_print.html (use HTML not .js for redirection)
            }, 3000); // 3 seconds
        } else {
            // Invalid credentials
            alert('Invalid enrollment ID or password.');
            window.location.reload(); // Refresh the page after showing the alert
        }
    });

    // Handling the "Register" link click to redirect to registration.html
    const registerLink = form.querySelector('.register-link a');
    registerLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action of the link
        window.location.href = './elements/registration.html'; // Redirect to registration.html
    });

    function showSuccessMessage(message) {
        // Create an overlay to darken the background
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';

        // Create the message box
        const messageBox = document.createElement('div');
        messageBox.textContent = message;
        messageBox.style.backgroundColor = '#d4edda';
        messageBox.style.color = '#155724';
        messageBox.style.padding = '20px';
        messageBox.style.border = '1px solid #c3e6cb';
        messageBox.style.borderRadius = '10px';
        messageBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
        messageBox.style.maxWidth = '80%';
        messageBox.style.textAlign = 'center';

        // Append the message box to the overlay
        overlay.appendChild(messageBox);

        // Append the overlay to the body
        document.body.appendChild(overlay);
    }
});
