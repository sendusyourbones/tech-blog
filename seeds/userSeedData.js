const { User } = require('../models');

const userData = [
    {
        id: "fe063ea3-4e21-45f2-835d-4797fd047625",
        username: "jeffprobst",
        password: "password1"
    },
    {
        id: "4ac19603-a4f4-4bc0-b41d-97c0706aedec",
        username: "ruthfisher",
        password: "password2"
    },
    {
        id: "57f6db00-37be-4b22-b11a-525ba7c41cb4",
        username: "walterwhite",
        password: "password3"
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
