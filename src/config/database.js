const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect("mongodb+srv://snehabhardwaj035:R7q8FmNwXzemdmC8@learningbackend.9lll2.mongodb.net/DevTinder");
};

module.exports = connectDB;
// const URI = "mongodb+srv://snehabhardwaj035:R7q8FmNwXzemdmC8@learningbackend.9lll2.mongodb.net/"
