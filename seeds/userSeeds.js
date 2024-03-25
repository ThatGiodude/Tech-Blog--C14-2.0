const { User } = require('../models');

const userData = [
    {
        username: "harvey_dent",
        twitter: "2faceddent",
        github: "harveyd",
        email: "harveydent@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "joe_kerr",
        twitter: "clownprince",
        github: "Jokesonyou",
        email: "joekerr@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "harley_quinn",
        twitter: "hq_from_bk",
        github: "harleenquinnzel",
        email: "revyaharley@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "scare_crow",
        twitter: "frightnight",
        github: "JonathanCrane",
        email: "JCSpooks@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "Bruce_Wayne",
        twitter: "IamVengeance",
        github: "IamtheNight",
        email: "ImBatman@gmail.com",
        password: "1234567"
    },
    {
        username: "ThatGiodude",
        twitter: "ThatGiodude",
        github: "ThatGiodude",
        email: "ThatGiodude@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;