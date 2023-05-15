const $usernameSignup = document.getElementById('username-signup');
const $passwordSignup = document.getElementById('password-signup');
const $signupBtn = document.getElementById('signup-btn');

$signupBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = $usernameSignup.value;
    const password = $passwordSignup.value;

    if (!username || !password) {
        return alert('Username and password must be provided');
    }

    if (password.length < 8) {
        return alert('Password must be at least 8 characters');
    }

    try {
        const response = await fetch('api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to sign up');
        }
    } catch (error) {
        alert(error);
    }
});
