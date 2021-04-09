const { User } = require('../models');

const userData = [
 {
    username: "Alastair",
    email: "Alastair.Mcdonald@gmail.com",
    password: "p@ssword1",
 },
 {
    username: "Winn1",
    email: "Winifred.love@gmail.com",
    password: "p@ssword2",

 },
 {
    username: "Rajesh",
    email: "rajesh_g@gmail.com",
    password: "p@assword3",

 },
{
    username: "Alice_says",
    email: "alice_lee@gmail.com",
    password: "p@assword4",
},
{
    username: "G33ta",
    email: "geeta.beets@gmail.com",
    password: "p@assword5",
},
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds; 
