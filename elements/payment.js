document.addEventListener("DOMContentLoaded", function () {
    // Show/hide payment options based on selection
    document.getElementById("payment-method").addEventListener("change", showPaymentOptions);

    // Form submission handler
    document.getElementById("payment-form").addEventListener("submit", handleFormSubmission);

    function showPaymentOptions() {
        const paymentMethod = document.getElementById("payment-method").value;
        document.getElementById("card-details").style.display = paymentMethod === "card" ? "block" : "none";
        document.getElementById("upi-details").style.display = paymentMethod === "upi" ? "block" : "none";
        document.getElementById("netbanking-details").style.display = paymentMethod === "netbanking" ? "block" : "none";
    }

    function handleFormSubmission(event) {
        event.preventDefault();  // Prevent the default form submission

        // Check if all required fields are filled (basic check)
        const fullName = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const paymentMethod = document.getElementById("payment-method").value;

        // Ensure that payment method is selected
        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;  // Stop further execution if payment method is not selected
        }

        // Ensure that payment details are filled based on the selected method
        let isPaymentValid = true;
        if (paymentMethod === "card") {
            const cardName = document.getElementById("card-name").value;
            const cardNumber = document.getElementById("card-number").value;
            const expiryDate = document.getElementById("expiry-date").value;
            const cvc = document.getElementById("cvc").value;

            isPaymentValid = cardName && cardNumber && expiryDate && cvc;
        } else if (paymentMethod === "upi") {
            const upiId = document.getElementById("upi-id").value;
            isPaymentValid = upiId;
        } else if (paymentMethod === "netbanking") {
            const bankName = document.getElementById("bank-name").value;
            isPaymentValid = bankName;
        }

        if (fullName && email && phone && isPaymentValid) {
            // If all required fields are filled and payment is valid, show success message
            showSuccessMessage("Payment Successful! You have successfully registered.");

            // Set a timeout for 10 seconds to redirect
            setTimeout(function () {
                window.location.href = "app_print.html";
            }, 10000); // 10 seconds
        } else {
            alert("Please fill out all required fields.");
        }
    }

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
