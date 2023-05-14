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

// PUT /api/posts/:id (update a post)
router.put('/:id', async (req, res) => {
    try {
        await Post.update({
            title: req.body.title,
            content: req.body.content,
        },
        {
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: 'post updated!' });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// DELETE /api/posts/:id (delete a post)
router.delete('/:id', async (req, res) => {
    try {
        await Post.destroy({ where: { id: req.params.id } });
        res.json({ message: 'post deleted!' });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;