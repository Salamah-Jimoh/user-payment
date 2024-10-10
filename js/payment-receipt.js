document.addEventListener('DOMContentLoaded', function () {
    // Function to view the receipt details
    window.viewReceipt = function (paymentType, amount, date) {
        const fullName = document.getElementById('fullname');
        const faculty = document.getElementById('faculty');
        const department = document.getElementById('department');
        const matric = document.getElementById('matric');
        const receiptDetails = document.getElementById('receiptDetails');
        const receiptPaymentType = document.getElementById('receiptPaymentType');
        const receiptAmount = document.getElementById('receiptAmount');
        const receiptDate = document.getElementById('receiptDate');

        // Get user details from local storage
        const storedMatric = localStorage.getItem('matric');
        const storedFirstName = localStorage.getItem('firstname');
        const storedSurname = localStorage.getItem('surname');
        const storedOtherName = localStorage.getItem('othername');
        const storedFaculty = localStorage.getItem('faculty');
        const storedDepartment= localStorage.getItem('department');

        // Set the receipt details
        matric.textContent = storedMatric;
        fullName.textContent = `${storedSurname.toUpperCase()}, ${storedFirstName} ${storedOtherName}`;
        department.textContent = storedDepartment;
        faculty.textContent = storedFaculty;
        receiptPaymentType.textContent = paymentType;
        receiptAmount.textContent = amount;
        receiptDate.textContent = date;

        // Show the receipt details
        receiptDetails.classList.remove('hidden');
    };

    // Function to print the receipt
    window.printReceipt = function () {
        // hide payment list, heading and menubar during print
        const menubar = document.querySelector('nav');
        const heading = document.querySelector('h1');
        const paymentList = document.querySelector('table');

        menubar.style.display = 'none';
        heading.style.display = 'none'
        paymentList.style.display = 'none';

        // Print the receipt
        window.print();

        // Restore visibility after printing
        menubar.style.display = 'block';
        heading.style.display = 'block'
        paymentList.style.display = 'block';
    };
});

//  Hamburger Menu
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});