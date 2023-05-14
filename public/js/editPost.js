const $updateBtn = document.getElementById('update-btn');
const $title = document.getElementById('title');
const $content = document.getElementById('content');
const $deleteBtn = document.getElementById('delete-btn');
const postId = location.pathname.slice(11);

// Event listener for update post button
$updateBtn.addEventListener('click', async (event) => {
    const title = $title.value;
    const content = $content.value;

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

// Event listener for delete post button
$deleteBtn.addEventListener('click', async (event) => {
    try {
        // Make DELETE request to delete the post from the db
        await fetch(`/api/posts/${postId}`, { method: 'DELETE' });

        // Take user back to dashboard
        location.href = '/dashboard';
    } catch (error) {
        console.log(error);
    }
});
