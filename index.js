document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");

     // Default valid username and password
     const validUsername = "admin";  // You can change this to any default username
     const validPassword = "password123";  // You can change this to any default password

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from submitting and refreshing the page

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate the username and password
        if (username === validUsername && password === validPassword) {
            // Redirect or display success message
            alert('Login successful!');
            window.location.href = './elements/view_application.html'; // Redirect to homepage.html or any other page
        } else {
            alert('Invalid username or password.');
        }
    });

    // Handling the "Register" link click to redirect to registration.html
    const registerLink = form.querySelector('.register-link a');
    registerLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action of the link
        window.location.href = './elements/registration.html'; // Redirect to registration.html
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form");
//     const usernameInput = document.querySelector("input[type='text']");
//     const passwordInput = document.querySelector("input[type='password']");

//     // Default valid username and password
//     const validUsername = "admin";  // You can change this to any default username
//     const validPassword = "password123";  // You can change this to any default password

//     if (form && usernameInput && passwordInput) {  // Check if elements exist
//         form.addEventListener("submit", function (event) {
//             event.preventDefault(); // Prevents form from submitting and refreshing the page

//             const username = usernameInput.value.trim();
//             const password = passwordInput.value.trim();

//             console.log("Username entered:", username);  // Debugging step
//             console.log("Password entered:", password);  // Debugging step

//             // Validate the username and password
//             if (username === validUsername && password === validPassword) {
//                 alert('Login successful!');
//                 console.log("Login successful!");  // Debugging step
//                 window.location.href = './elements/view_application.html'; // Redirect to homepage.html or any other page
//             } else {
//                 alert('Invalid username or password.');
//                 console.log("Invalid username or password.");  // Debugging step
//             }
//         });

//         // Handling the "Register" link click to redirect to registration.html
//         const registerLink = form.querySelector('.register-link a');
//         if (registerLink) {
//             registerLink.addEventListener('click', (event) => {
//                 event.preventDefault(); // Prevent the default action of the link
//                 window.location.href = './elements/registration.html'; // Redirect to registration.html
//             });
//         } else {
//             console.log("Register link not found.");
//         }
//     } else {
//         console.log("Form or inputs not found.");
//     }
// });
