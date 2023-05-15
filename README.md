# Tech Blog

## Description

This site enables developers to submit blog posts to share their learnings about technologies and technical concepts. The goal is to facilitate discussion and knowledge sharing among the developer community. Users can view all of the blog posts without needing to create an account, and they can create an account on the site if they wish to submit and comment on posts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This application requires a number of packages (see [Credits](#credits) below for the full list). To install these packages, clone the repo, `cd` into it, then run the command `npm i`.

Before running the application, create the database by following these steps:
1. In the command line, `cd` into the repo
2. Enter `mysql -u root -p` and enter your password
3. Enter `source ./db/schema.sql;`
4. Enter `exit`
5. Optionally, to seed the database with test data, enter `npm run seed`

Create a file called `.env` in the root directory and fill in the following variables:
- `DB_USER=[your mysql username]`
- `DB_PASSWORD=[your mysql password]`
- `DB_NAME=[the name of the database]`
- `PORT=[the port you want to use for the server]`
- `SECRET=[any random string]`

## Usage

<!-- Link to be added after deployment -->
View the deployed application here.

Instructions for using the application:
- If you do not have an account and wish to add your own post or comment on posts, first create an account:
    - Click "Log In" at the top-right corner
    - Click the "Sign up here" link on the log in screen
    - Enter a username and password (password must be at least 8 characters) and then click "Sign Up"
- The Home page contains links to the most recent blog posts in descending chronological order (most recent on top)
    - Click on a post title to view the content of the post and any comments on it, as well as to add your own comment (must be logged in to comment)
- The Dashboard (must be logged in to access) contains links to the posts you have submitted in descending chronological order (most recent on top) and a button to add a new post
    - Click on a post title to edit the title or content, or to delete the post
    - To add a post, click "Add New Post" and enter a title and content and click "Add Post"
- You will be automatically logged out after a period of inactivity, or you can click "Log Out" in the top-right corner to log out

## Credits

The following packages are used in this application:
- [mysql2](https://www.npmjs.com/package/mysql2) to connect to the database
- [sequelize](https://www.npmjs.com/package/sequelize) to interact with the database
- [express](https://www.npmjs.com/package/express) to handle API routing
- [dotenv](https://www.npmjs.com/package/dotenv) to manage environmental variables
- [bcrypt](https://www.npmjs.com/package/bcrypt) to hash and verify user passwords
- [handlebars](https://handlebarsjs.com/) to generate the views
- [luxon](https://moment.github.io/luxon/#/) to handle the display of timestamps
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) as the Handlebars view engine for Express
- [express-session](https://www.npmjs.com/package/express-session) to manage user session data

## License

MIT License