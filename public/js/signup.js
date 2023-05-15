// Get elements
const $usernameSignup = document.getElementById('username-signup');
const $passwordSignup = document.getElementById('password-signup');
const $signupBtn = document.getElementById('signup-btn');

// Event listener for signup button
$signupBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = $usernameSignup.value;
    const password = $passwordSignup.value;

    // Handle empty username or password
    if (!username || !password) {
        return alert('Username and password must be provided');
    }

    // Handle password that is too short
    if (password.length < 8) {
        return alert('Password must be at least 8 characters');
    }

    try {
        // Make POST request to sign up
        const response = await fetch('api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // If sign up is successful go to the dashboard, else show failed sign up alert
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to sign up');
        }
    } catch (error) {
        alert(error);
    }
});
