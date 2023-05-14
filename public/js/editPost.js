const $updateBtn = document.getElementById('update-btn');
const $title = document.getElementById('title');
const $content = document.getElementById('content');

// Event listener for update post button
$updateBtn.addEventListener('click', async (event) => {
    const title = $title.value;
    const content = $content.value;
    // Get postId from URL
    const postId = location.pathname.slice(11);

    // Handle empty fields
    if (!content || !title) {
        return alert('All fields are required');
    }

    try {
        // Make PUT request to update the post in the db
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({title, content}),
            headers: { 'Content-Type': 'application/json' },
        });

        // Take user back to dashboard
        location.href = '/dashboard';
    } catch (error) {
        console.log(error);
    }
});