const { User } = require('../models');


Const userData = [
 {
    username: "",
    email: "",
    password: "",
 },
 {
    username: "",
    email: "",
    password: "",

 },
 {
    username: "",
    email: "",
    password: "",

 },
{
    username: "",
    email: "",
    password: "",
},
{
    username: "",
    email: "",
    password: "",
},
];

const SeedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers; 





]