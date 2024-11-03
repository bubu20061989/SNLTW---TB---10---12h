document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const UserStorage = ['abcde'];
    const PasswordStorage = ['xyz'];

    let a = document.getElementById('username').value;
    let b = document.getElementById('password').value;

    let found = false;

    for (let i = 0; i < UserStorage.length; i++) {
        if (a === UserStorage[i] && b === PasswordStorage[i]) {
            found = true;
            break;
        }
    }

    const resultDiv = document.getElementById('loginResult');
    if (found) {
        resultDiv.textContent = 'Login successful! Redirecting...';
        resultDiv.style.color = 'green';
        
        // Redirect to homepage after a short delay
        setTimeout(() => {
            window.location.href = '../homepage.html'; // Change this to your homepage URL
        }, 1000); // 1 second delay
    } else {
        resultDiv.textContent = 'Invalid username or password.';
        resultDiv.style.color = 'red';
    }
});
