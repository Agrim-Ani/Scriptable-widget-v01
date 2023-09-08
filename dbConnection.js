const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
mongoose.set('strictQuery', true)
const connectDb = async()=>{
    try {
        const connect = await mongoose.connect("mongodb+srv://admin:admin@cluster0.wsrqfyy.mongodb.net/?retryWrites=true&w=majority")
        console.log("DATABASE is CONNECTED")
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
};

module.exports = connectDb; 