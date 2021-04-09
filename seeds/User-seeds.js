const { User } = require('../models');

const userData = [
 {
    username: "Alastair",
    password: "p@ssword1",
 },
 {
    username: "Winn1",
    password: "p@ssword2",

 },
 {
    username: "Rajesh88",
    password: "p@assword3",

 },
{
    username: "Alice_says",
    password: "p@assword4",
},
{
    username: "G33ta",
    password: "p@assword5",
},
{
   username: "D_Nazty",
   password: "p@assword6",

}, 
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds; 
