const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Razorpay = require("razorpay");
const Order = require("../models/orderModel")
const {v4: uuidv4} = require("uuid")
const key_id = 'rzp_test_9GGv1v0tWxEApF';
const key_secret = 'XqQsMbjCkWshH3TSwpMu8s49';

const instance = new Razorpay({
  key_id,
  key_secret
});
router.post("/placeorder", async (req, res) => {
  const { subtotal, currentUser, cartItems } = req.body;
  //console.log(subtotal);
  try {

     const options = {
        amount: subtotal * 100 ,
        currency: "INR",
        receipt: currentUser.name,
    }
     
    const payment = instance.orders.create(options);
      if(payment){ 
        const neworder = new Order({
          name: currentUser.name,
          email: currentUser.email,
          userid: currentUser._id,
          orderItems: cartItems,
          orderAmount: subtotal,
          shippingAddress: currentUser.address,
          transactionId: payment.razorpay_payment_id
        })
        neworder.save();
        console.log(neworder);
        res.send("Payment done successfully");
        //window.location.href = "/";
      }
      else{
        res.send("Payment faild");
      }
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" + error });
  }
});

router.post("/getuserorders" , async (req , res) =>{
  const {userid} = req.body;
  try {
    const orders = await Order.find({userid: userid}).sort({_id: -1});

    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" + error });
  }
});

module.exports = router;
