// Get elements
const $usernameLogin = document.getElementById('username-login');
const $passwordLogin = document.getElementById('password-login');
const $loginBtn = document.getElementById('login-btn');

// Event listener for login button
$loginBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = $usernameLogin.value;
    const password = $passwordLogin.value;

    // Handle empty username or password
    if (!username || !password) {
        return alert('Username and password must be provided');
    }

    try {
        // Make POST request to log in
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // If log in info is correct go to the dashboard, else show failed login alert
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    } catch (error) {
        alert(error);
    }
});
