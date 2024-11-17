document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('redirectMessage').style.display = 'none';

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    // Validate username (must be at least 3 characters)
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }

    // Validate email (must be a valid format)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Validate password (must be at least 6 characters)
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    // If all validations pass, save to localStorage and redirect to login
    if (valid) {
        // Show success message
        document.getElementById('successMessage').textContent = 'Sign-up successful!';
        document.getElementById('successMessage').style.display = 'block';

        // Save user data to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Redirect to login page after a short delay
        setTimeout(function() {
            window.location.href = './login.html'; // Adjust path if needed
        }, 2000); // 2-second delay
    }
});
