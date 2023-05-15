const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'username'],
                },
            ],
            order: [['createdAt', 'DESC']],
        });
        const posts = postData.map(post => post.get({ plain: true }));

        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn,
            cssPath: './css/style.css',
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('account', {
            loggedIn: req.session.loggedIn,
            cssPath: './css/style.css',
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            const postData = await Post.findAll({ 
                where: { creator_id: req.session.user.id },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'username'],
                    },
                ],
                order: [['createdAt', 'DESC']],
            });
            const posts = postData.map(post => post.get({ plain: true }));
            res.render('dashboard', {
                loggedIn: req.session.loggedIn,
                posts,
                cssPath: './css/style.css',
            });
        } else {
            res.render('dashboard', {
                cssPath: './css/style.css',
            });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/dashboard/:id', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            const postContent = await Post.findByPk(req.params.id);
            const post = postContent.get({plain: true});
    
            const commentsData = await Comment.findAll({
                where: { post_id: post.id},
                include: [
                    {
                        model: User,
                        attributes: ['id', 'username'],
                    }
                ],
                order: [['createdAt', 'DESC']],
            });
            const comments = commentsData.map(comment => comment.get({ plain: true }));
            
            res.render('dashboard-post', {
                loggedIn: req.session.loggedIn,
                post,
                comments,
                cssPath: '../css/style.css',
            });
        } else {
            res.redirect('/login');
        }    
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/new-post', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.render('new-post', {
                loggedIn: req.session.loggedIn,
                cssPath: './css/style.css',
            });
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const postContent = await Post.findByPk(postId, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'username'],
                },
            ]
        });
        const post = postContent.get({plain: true});

        const commentsData = await Comment.findAll({
            where: { post_id: post.id},
            include: [
                {
                    model: User,
                    attributes: ['id', 'username'],
                }
            ],
            order: [['createdAt', 'DESC']],
        });
        const comments = commentsData.map(comment => comment.get({ plain: true }));

        res.render('post', {
            loggedIn: req.session.loggedIn,
            post,
            comments,
            cssPath: '../css/style.css',
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
