const { Post } = require('../models');

const postData = [
    {
        id: "19986f5e-5467-4603-a5a6-9bbda705adc9",
        title: "Tech Blog Post 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi. Nisi porta lorem mollis aliquam ut porttitor. Velit euismod in pellentesque massa placerat duis ultricies. Euismod elementum nisi quis eleifend quam. Magna ac placerat vestibulum lectus mauris ultrices eros. Vitae auctor eu augue ut lectus arcu bibendum at. Id velit ut tortor pretium viverra suspendisse. Consequat mauris nunc congue nisi. Pellentesque pulvinar pellentesque habitant morbi. Eleifend mi in nulla posuere sollicitudin aliquam. Lacus vel facilisis volutpat est velit egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Porta nibh venenatis cras sed. Vitae aliquet nec ullamcorper sit.",
        creator_id: "fe063ea3-4e21-45f2-835d-4797fd047625"
    },
    {
        id: "017fde7e-b49f-4737-bdfd-df72429fb602",
        title: "Tech Blog Post 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi. Nisi porta lorem mollis aliquam ut porttitor. Velit euismod in pellentesque massa placerat duis ultricies. Euismod elementum nisi quis eleifend quam. Magna ac placerat vestibulum lectus mauris ultrices eros. Vitae auctor eu augue ut lectus arcu bibendum at. Id velit ut tortor pretium viverra suspendisse. Consequat mauris nunc congue nisi. Pellentesque pulvinar pellentesque habitant morbi.",
        creator_id: "fe063ea3-4e21-45f2-835d-4797fd047625"
    },
    {
        id: "e790c3e4-7c27-4688-ad63-4c2dbd5db546",
        title: "Tech Blog Post 3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi. Nisi porta lorem mollis aliquam ut porttitor. Velit euismod in pellentesque massa placerat duis ultricies. Euismod elementum nisi quis eleifend quam. Magna ac placerat vestibulum lectus mauris ultrices eros. Vitae auctor eu augue ut lectus arcu bibendum at.",
        creator_id: "4ac19603-a4f4-4bc0-b41d-97c0706aedec"
    },
    {
        id: "46d39797-345b-401f-b8fe-99a181fc6948",
        title: "Tech Blog Post 4",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi. Nisi porta lorem mollis aliquam ut porttitor. Velit euismod in pellentesque massa placerat duis ultricies. Euismod elementum nisi quis eleifend quam.",
        creator_id: "57f6db00-37be-4b22-b11a-525ba7c41cb4"
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
