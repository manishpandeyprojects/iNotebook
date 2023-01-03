const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const mongoURI = "mongodb://localhost:27017/inotebook";
const connetToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log('Mongodb connected successfully..');
    });
}

module.exports = connetToMongo;
