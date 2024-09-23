document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from submitting and refreshing the page

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("Please fill in both username and password.");
        } else {
            // Perform form submission or other actions
            alert(`Logging in as: ${username}`);
            
            // Simulate form submission (replace this with your actual backend logic)
            console.log("Username:", username);
            console.log("Password:", password);
            
            // Uncomment the following line to proceed with form submission
            // form.submit();
        }
    });
});
