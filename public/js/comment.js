// Get elements
const $submitBtn = document.getElementById('submitBtn');
const $comment = document.getElementById('comment');
const $commentsDiv = document.getElementById('comments');

// Event listener for submit button
$submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const comment = $comment.value;

    // Handle empty comment
    if (!comment) {
        return alert('Comment must be provided');
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

        // Get postId from URL
        const postId = location.pathname.slice(6);

        // Make POST request to add the comment to the db
        const commentResponse = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment, userData, postId}),
            headers: { 'Content-Type': 'application/json' },
        });
        const commentData = await commentResponse.json();

        // Add new comment to the page
        // Create paragraph with comment text
        const $textPara = document.createElement('p');
        $textPara.textContent = commentData.text;

        // Create paragraph with author and timestamp
        const $authorPara = document.createElement('p');
        const date = new Date(Date.parse(commentData.createdAt));
        const timestamp = luxon.DateTime.fromJSDate(date).toFormat('ff');
        $authorPara.textContent = `-${userData.username} on ${timestamp}`;

        // Create containing div and add paragraphs to it
        const $commentDiv = document.createElement('div');
        $commentDiv.appendChild($textPara);
        $commentDiv.appendChild($authorPara);

        // Add new div to top of comments div
        $commentsDiv.insertBefore($commentDiv, $commentsDiv.firstChild);
        
        // Clear out the comment input field
        $comment.value = '';
    } catch (error) {
        console.log(error);
    }
});