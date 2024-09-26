document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from submitting and refreshing the page

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate the username and password
        if (username === validUsername && password === validPassword) {
            // Redirect or display success message
            alert('Login successful!');
            window.location.href = 'homepage.html'; // Redirect to homepage.html or any other page
        } else {
            alert('Invalid username or password.');
        }
    });

    // Handling the "Forgot password" link click
    const forgotPasswordLink = form.querySelector('.remember-forgot a');
    forgotPasswordLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent navigation
        alert('Password recovery not available in this demo.');
    });

    // Handling the "Register" link click to redirect to registration.html
    const registerLink = form.querySelector('.register-link a');
    registerLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action of the link
        window.location.href = './elements/registration.html'; // Redirect to registration.html
    });
});
