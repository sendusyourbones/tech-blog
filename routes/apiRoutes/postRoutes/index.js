const router = require('express').Router();
const { Post } = require('../../../models');

// POST /api/posts (add new post)
router.post('/', async (req, res) => {
    try {
        const post = {
            title: req.body.title,
            content: req.body.content,
            creator_id: req.body.userData.id,
        }
        const postData = await Post.create(post);
        res.json(postData);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;