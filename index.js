const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const registeration_Router=require('./Controller/registeration.js').registeration_Router;
const profile_Router=require('./Controller/profile.js').profile_Router;
const server = express();
require('dotenv').config();


async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (err) {
        console.log(err.message);
    }
}
main();
server.use(cors());
server.use(express.json());
server.use('/register',registeration_Router);
server.use('/getprofile',profile_Router);
server.listen(8000,()=>{
    console.log("server is running");
});