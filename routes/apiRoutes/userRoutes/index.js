const router = require('express').Router();
const { User } = require('../../../models');

// GET /api/users/loggedin (get the logged in user's information)
router.get('/loggedin', (req, res) => {
    try {
        if (req.session.user) {
            const loggedinUser = req.session.user;
            res.json(loggedinUser);
        } else {
            res.status(400).json({ message: 'no logged in user' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
});

// POST /api/users/login (check login credentials and log in the user)
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
        
        // Save the user's data and that they are logged in to the session
        req.session.save(() => {
            req.session.user = userData;
            req.session.loggedIn = true;
            res.json({ message: 'You are logged in!' });
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// POST /api/users/signup (create a new user account)
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        // Save the user's data and that they are logged in to the session
        req.session.save(() => {
            req.session.user = userData;
            req.session.loggedIn = true;
            res.json({ message: 'You are signed up!' });
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// POST /api/users/logout (log out user)
router.post('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
