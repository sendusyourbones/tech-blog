const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        const posts = postData.map(post => post.get({ plain: true }));

        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('user-profile');
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;