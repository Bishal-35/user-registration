// // document.addEventListener("DOMContentLoaded", function () {
// //     const form = document.querySelector("form");
// //     const usernameInput = document.querySelector("input[type='text']");
// //     const passwordInput = document.querySelector("input[type='password']");

// //     form.addEventListener("submit", function (event) {
// //         event.preventDefault(); 

// //         const username = usernameInput.value.trim();
// //         const password = passwordInput.value.trim();

// //         if (!username || !password) {
// //             alert("Please fill in both username and password.");
// //         } else {
// //             alert(`Logging in as: ${username}`);
// //             console.log("Username:", username);
// //             console.log("Password:", password);
// //         }
// //     });
// // });
// document.addEventListener('DOMContentLoaded', () => {
//     // Selecting the form and the input fields
//     const form = document.querySelector('form');
//     const usernameInput = form.querySelector('input[type="text"]');
//     const passwordInput = form.querySelector('input[type="password"]');
    
//     // Handling the form submission
//     form.addEventListener('submit', (event) => {
//       event.preventDefault(); // Prevent the default form submission
      
//     // Get input values
//       const username = usernameInput.value.trim();
//       const password = passwordInput.value.trim();
  
//       // Simple validation
//       if (username === '' || password === '') {
//         alert('Please enter both username and password.');
//       } else {
//         // In a real-world application, you would send this data to the server here.
//         alert(`Login successful!\nUsername: ${username}\nPassword: ${password}`);
//       }
//     });
    
//     // Handling the "Forgot password" link
//     const forgotPasswordLink = form.querySelector('.remember-forgot a');
//     forgotPasswordLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       alert('Password recovery not available in this demo.');
//     });
    
//     // Handling the "Register" link
//     const registerLink = form.querySelector('.register-link a');
//     registerLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       alert('Registration page not available in this demo.');
//     });
//   });
  

// document.addEventListener('DOMContentLoaded', () => {
//     // Selecting the form and input fields
//     const form = document.querySelector('form');
//     const usernameInput = form.querySelector('input[type="text"]');
//     const passwordInput = form.querySelector('input[type="password"]');
    
//     // Handling the form submission
//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent form from being submitted normally
        
//         // Get input values
//         const username = usernameInput.value.trim();
//         const password = passwordInput.value.trim();
  
//         // Simple validation for empty fields
//         if (username === '' || password === '') {
//             alert('Please enter both username and password.');
//         } else {
//             // Alerting success (replace this with server logic in a real app)
//             alert(`Login successful!\nUsername: ${username}\nPassword: ${password}`);
//         }
//     });
    
//     // Handling the "Forgot password" link click
//     const forgotPasswordLink = form.querySelector('.remember-forgot a');
//     forgotPasswordLink.addEventListener('click', (event) => {
//         event.preventDefault(); // Prevent navigation
//         alert('Password recovery not available in this demo.');
//     });
    
//     // Handling the "Register" link click to redirect to registration.html
//     const registerLink = form.querySelector('.register-link a');
//     registerLink.addEventListener('click', (event) => {
//         event.preventDefault(); // Prevent the default action of the link
//         window.location.href = './elements/registration.html'; // Redirect to registration.html
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    // Predefined username and password
    const validUsername = 'user123';
    const validPassword = 'pass123';

    // Selecting the form and input fields
    const form = document.querySelector('form');
    const usernameInput = form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('input[type="password"]');

    // Handling the form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from being submitted normally

        // Get input values
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
        window.location.href = 'registration.html'; // Redirect to registration.html
    });
});
