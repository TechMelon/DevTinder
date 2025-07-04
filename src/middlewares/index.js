const express = require("express");
const connectDB = require("../config/database");
const app = express();
// require('./config/database.js')
const User = require("../models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {


  // console.log(req.body);
  const user = new User(req.body);

try{
  await user.save();
res.send("User created successfully");
}catch(err){
  res.status(400).send("Error creating user: " + err.message);
}

});

app.get("/users", async (req,res) => {
  const userName = req.body.firstName;

  const user = await User.findOne({ firstName: userName });
  if(!user){
    return res.status(404).send("User not found");
  }else{
    res.send(user);
  }
  // try{ 
  //   const user = await User.find({ firstName : userName });
  //   if(user.length === 0){
  //     res.status(404).send("User not found");
  //   }
  //   else{
  //   res.send(user);
  //   }
  // }catch(err){
  //   res.status(400).send("something went wrong");
  //   console.log(err);
  // }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Error fetching users: " + err.message);
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  // console.log(userId);
  
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Error fetching users: " + err.message);
  }
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  // console.log(userId);
  
  try {
    const user = await User.findByIdAndUpdate(userId, data, { new: true });
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Error fetching users: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:");
  });
