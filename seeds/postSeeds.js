const { Post } = require('../models');

const postData = [
    {
        title: "User finally learns how to seed data properly!",
        post_content: "After hours of trial and error seeding data is finally possible!",
        user_id: 1
    },
    {
        title: "User can't stop cloning repos into repos and has to restart their git folder over and over again!",
        post_content: "User continues to break his code by consisitenly cloning repos incorrectly!",
        user_id: 3
    },
    {
        title: "User in the final stretch understands how connections work!",
        post_content: "After losing tens of hours of sleep, user finally sets the connections right!",
        user_id: 2

    },
    {
        title: "User has given up all hope of success?",
        post_content: "Hey, I hear there's carnivals somewhere right? Gamestop hasn't gone under yet?",
        user_id: 5
    },
    {
        title: "User can't seem to grasp REACT?",
        post_content: "Oh this final project is killing me!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;