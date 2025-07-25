const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        requires : true,
        minlength : 2,
        maxlength : 50,
        trim : true,
    },
    lastName : {
        type : String,
        requires : true,
        minlength : 2,
        maxlength : 50,
        trim : true, 
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },
    password : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        min : 18,
    },
    gender : {
        type : String,
        validate(value){
            if(!["male", "female", "other"].includes(value)){
                throw new Error("Invalid gender");
            }
        }
    },
    about : {
        type : String,
        default : "No information provided"
    },
    photoUrl : {
        type : String,
    },
    skills : {
        type : [String],
    }
},{
    timestamps : true,
})

const User = mongoose.model("User", userSchema);
module.exports = User;