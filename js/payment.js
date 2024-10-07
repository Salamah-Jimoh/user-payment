document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('paymentForm');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const paymentType = document.getElementById('paymentType').value;

        // Check if payment type is selected
        if (paymentType === '') {
            errorMessage.classList.remove('hidden'); // Show error message
        } else {
            errorMessage.classList.add('hidden'); // Hide error message

            // Simulate successful payment selection
            successMessage.classList.remove('hidden');
            successMessage.innerText = `Payment type selected: ${paymentType}`;

            // Redirect to the receipt print-out
            setTimeout(() => {
            window.location.href = 'payment-receipt.html';
            }, 2000);
        }
    });
});