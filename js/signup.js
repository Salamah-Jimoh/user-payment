document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Capture form data
        const matric = document.getElementById('matric').value;
        const surname = document.getElementById('surname').value;
        const firstname = document.getElementById('firstname').value;
        const othername = document.getElementById('othername').value;
        const department = document.getElementById('department').value;
        const faculty = document.getElementById('faculty').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;


        // Simulate submission by storing data in localStorage 
        localStorage.setItem('matric', matric);
        localStorage.setItem('surname', surname);
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('othername', othername);
        localStorage.setItem('department', department);
        localStorage.setItem('faculty', faculty);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);

        let hasErrors = false;

        // Redirect to login.html after 'submission'

        if(matric && surname && firstname && othername && department && faculty && email && phone !== ''){

            window.location.href = 'login.html';
            signupForm.reset();
        } else {
            
           alert('All fields are required. Please complete all sections before submission');
        }

        // if(phone === '' || isNaN(phone)){ // validate phone number
        //     hasErrors = true;
            
        // } 

    });
});