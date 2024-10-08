document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form default submission

        // Get the email  and matric the user entered
        const emailInput = document.getElementById('email').value;
        const matricInput = document.getElementById('matric').value;

        // Simulate server-side validation by checking localStorage
        const storedEmail = localStorage.getItem('email');
        const storedMatric = localStorage.getItem('matric');

        if (emailInput === storedEmail && matricInput === storedMatric) {
            // Simulate successful login by redirecting to the payment page
            window.location.href = 'payment.html';
            loginForm.reset();
        } else {
            alert('Invalid details. Please try again.');
        }
    });
});