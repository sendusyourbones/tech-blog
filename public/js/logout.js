// Get element
const $logoutBtn = document.getElementById('logout');

// Event listener for logout button
$logoutBtn.addEventListener('click', async () => {
    try {
        // Make POST request to log out
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        // If response is successful go to login page, else alert response status
        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    } catch (error) {
        alert(error);
    }
});
