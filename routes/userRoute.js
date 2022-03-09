const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", (req, res) => {
   const { name, email, password , address , contact } = req.body;
   User.findOne({ email: email }, (err, user) => {
       if (user) {
        res.send({ message: "User already registerd " });
       } else {
         const user = new User({ name, email, password , address, contact });
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "Successfully Registered" });
        }
      });
    }
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email, password });

    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
        address: user[0].address,
        contact: user[0].contact,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});
router.get('/getallusers' , async(req,res)=>{
  try{
    const users = await User.find({})
    res.send(users);
  }catch(error){
    return res.status(400).json({message: error});
  }
})

router.post("/deleteuser" , async(req,res)=>{
  const userid = req.body.userid
  try{
      await User.findOneAndDelete({_id : userid})
      res.send('User deleted successfully')
  }catch(error){
    return res.status(400).json({ message: error });
  }
});


module.exports = router;
