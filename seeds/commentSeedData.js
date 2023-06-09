const { Comment } = require('../models');

const commentData = [
    {
        id: "4038f282-f5fa-447a-b2f4-a2f31231906b",
        text: "Great post!",
        post_id: "19986f5e-5467-4603-a5a6-9bbda705adc9",
        poster_id: "57f6db00-37be-4b22-b11a-525ba7c41cb4"
    },
    {
        id: "f8fd77c9-f27a-4cad-9afd-95876e48647f",
        text: "I strongly disagree.",
        post_id: "017fde7e-b49f-4737-bdfd-df72429fb602",
        poster_id: "4ac19603-a4f4-4bc0-b41d-97c0706aedec"
    },
    {
        id: "5d5aa2ef-2b49-446c-92ae-ad5fe6020976",
        text: "You don't know what you're talking about.",
        post_id: "e790c3e4-7c27-4688-ad63-4c2dbd5db546",
        poster_id: "fe063ea3-4e21-45f2-835d-4797fd047625"
    },
    {
        id: "30471ebf-173c-4221-8937-1969be5cbc5a",
        text: "I think you have some really good points!",
        post_id: "e790c3e4-7c27-4688-ad63-4c2dbd5db546",
        poster_id: "fe063ea3-4e21-45f2-835d-4797fd047625"
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
