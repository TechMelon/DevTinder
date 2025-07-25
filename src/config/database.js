const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URI);
};

module.exports = connectDB;
// const URI = "mongodb+srv://snehabhardwaj035:R7q8FmNwXzemdmC8@learningbackend.9lll2.mongodb.net/"
