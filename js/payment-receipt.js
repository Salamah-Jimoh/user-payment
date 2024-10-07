document.addEventListener('DOMContentLoaded', function () {
    // Function to view the receipt details
    window.viewReceipt = function (paymentType, amount, date) {
        const receiptDetails = document.getElementById('receiptDetails');
        const receiptPaymentType = document.getElementById('receiptPaymentType');
        const receiptAmount = document.getElementById('receiptAmount');
        const receiptDate = document.getElementById('receiptDate');

        // Set the receipt details
        receiptPaymentType.textContent = paymentType;
        receiptAmount.textContent = amount;
        receiptDate.textContent = date;

        // Show the receipt details
        receiptDetails.classList.remove('hidden');
    };

    // Function to print the receipt
    window.printReceipt = function () {
        // hide payment list and menubar during print
        const menubar = document.querySelector('nav');
        const paymentList = document.querySelector('table');
        const receiptDetails = document.getElementById('receiptDetails');

        menubar.style.display = 'none';
        paymentList.style.display = 'none';

        // Print the receipt
        window.print();

        // Restore visibility after printing
        sidebar.style.display = 'block';
        paymentList.style.display = 'block';
    };
});