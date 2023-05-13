const router = require('express').Router();
const { User } = require('../../../models');

// POST /api/users/login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;
            res.json({ message: 'You are logged in!' });
        });

    } catch (error) {
        res.status(500).json({ error });
    }
});

// POST /api/users/signup
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;
            res.json({ message: 'You are signed up!' });
        });

    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
