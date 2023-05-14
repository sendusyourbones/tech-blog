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
        res.render('account', {
            loggedIn: req.session.loggedIn,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const userPostData = await Post.findAll({ where: { creator_id: req.session.userId } });
        const userPosts = userPostData.map(post => post.get({ plain: true }));

        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            userPosts,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
