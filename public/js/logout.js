const $logoutBtn = document.getElementById('logout');

$logoutBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    } catch (error) {
        alert(error);
    }
});
