const sequelize = require ('../config/connection');
const seedPosts = require('./postSeedData');
const seedUsers = require('./userSeedData');
const seedComments = require('./commentSeedData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedPosts();

    await seedComments();

    process.exit(0);
};

seedDatabase();
