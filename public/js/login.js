const $usernameLogin = document.getElementById('username-login');
const $passwordLogin = document.getElementById('password-login');
const $loginBtn = document.getElementById('login-btn');

$loginBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = $usernameLogin.value;
    const password = $passwordLogin.value;

    if (!username || !password) {
        return alert('Username and password must be provided');
    }

    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    } catch (error) {
        alert(error);
    }
});
