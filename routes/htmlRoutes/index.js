const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// Render Home page
router.get('/', async (req, res) => {
    try {
        // Get all posts from db
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

        // Render template
        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn,
            cssPath: './css/style.css',
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Render Log In page
router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            loggedIn: req.session.loggedIn,
            cssPath: './css/style.css',
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Render Sign Up page
router.get('/signup', async (req, res) => {
    try {
        res.render('signup', {
            loggedIn: req.session.loggedIn,
            cssPath: './css/style.css',
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Render Dashboard page
router.get('/dashboard', async (req, res) => {
    try {
        // If user is logged in
        if (req.session.loggedIn) {
            // Get all of the logged in user's posts from the db
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

            // Render template
            res.render('dashboard', {
                loggedIn: req.session.loggedIn,
                posts,
                cssPath: './css/style.css',
            });
        // If not logged in go to Log In screen
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Render single post from user's dashboard
router.get('/dashboard/:id', async (req, res) => {
    try {
        // If user is logged in
        if (req.session.loggedIn) {
            // Get the specified post from the db
            const postContent = await Post.findByPk(req.params.id);
            const post = postContent.get({plain: true});
    
            // Get the post's comment data from the db
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
            
            // Render template
            res.render('dashboard-post', {
                loggedIn: req.session.loggedIn,
                post,
                comments,
                cssPath: '../css/style.css',
            });
        // If not logged in go to Log In screen
        } else {
            res.redirect('/login');
        }    
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Render page to add new post
router.get('/new-post', async (req, res) => {
    try {
        // If user is logged in
        if (req.session.loggedIn) {
            // Render template
            res.render('new-post', {
                loggedIn: req.session.loggedIn,
                cssPath: './css/style.css',
            });
        // If not logged in go to Log In screen
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

// Render single post public-facing page
router.get('/post/:id', async (req, res) => {
    try {
        // Get post from db
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

        // Get post's comments from db
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

        // Render template
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
