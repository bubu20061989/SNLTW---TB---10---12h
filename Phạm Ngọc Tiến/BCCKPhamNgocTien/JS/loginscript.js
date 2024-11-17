document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve stored username and password from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Get user input
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    const resultDiv = document.getElementById('loginResult');

    // Check if the input matches the stored data
    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        resultDiv.textContent = 'Login successful! Redirecting...';
        resultDiv.style.color = 'green';

        // Redirect to homepage after a short delay
        setTimeout(() => {
            window.location.href ='./homepage.html'; // Change this to your homepage URL
        }, 1000); // 1-second delay
    } else {
        resultDiv.textContent = 'Invalid username or password or email.';
        resultDiv.style.color = 'red';
    }
});
