// Get elements
const $addPostBtn = document.getElementById('add-post-btn');
const $title = document.getElementById('title');
const $content = document.getElementById('content');

// Event listener for add post button
$addPostBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const content = $content.value;
    const title = $title.value;

    // Handle empty field
    if (!content || !title) {
        return alert('All fields are required');
    }

    try {
        // Get information about logged in user
        const userResponse = await fetch('/api/users/loggedin');

        // If user is not logged in, send to login page
        if (!userResponse.ok) {
            location.href = '/login';
            return;
        }

        const userData = await userResponse.json();

        // Make POST request to add the post to the db
        const postResponse = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, content, userData}),
            headers: { 'Content-Type': 'application/json' },
        });
        
        // Take user back to dashboard
        location.href = '/dashboard';
    } catch (error) {
        console.log(error);
    }
});