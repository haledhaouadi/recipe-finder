
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const JWT_Secret="gjkjjzebhjehazlojcn"

app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb+srv://hala:hala123@cluster0.x7qpct4.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => console.log(e));

require("./userDetails");
const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.send({ error: "User exists" });
    }

    await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.send({ status: "success" });
  } catch (error) {
    res.send({ error: "An error occurred during registration" });
    console.log(error);
  }
});

app.post("/login.user", async (req,res)=>{
    const {email , password}=red.body;
    const user=await User.findOne({email});
    if (!User) {
        return res.send({ error: "User not found" });
        alert('user not found');
      }
     if(await bcrypt.compare(password,user.password)) {
        const token =jwt.sign({},JWT_Secret);
        if(res.status(201)){
            return res.json({status:"ok",data:token})
        } else {
            return res.json({error:"error"});
        }
     }
res.json({status:"error",error:"invalid password"});
})
app.listen(5000, () => {
  console.log("Server started");
  
});