// This file contains the JavaScript code for the web project. It handles user interactions, form validations, and any dynamic content updates for the pages.

document.addEventListener('DOMContentLoaded', function() {
    // Example of handling form submission for login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // Add validation logic here
            if (username && password) {
                alert('Login successful!');
                // Redirect to personal page or handle login
            } else {
                alert('Please enter both username and password.');
            }
        });
    }

    // Example of handling form submission for registration
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const regUsername = document.getElementById('regUsername').value;
            const regPassword = document.getElementById('regPassword').value;
            // Add validation logic here
            if (regUsername && regPassword) {
                alert('Registration successful!');
                // Redirect to login page or handle registration
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Example of handling logout
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            alert('You have logged out.');
            // Redirect to home page or handle logout
        });
    }
});