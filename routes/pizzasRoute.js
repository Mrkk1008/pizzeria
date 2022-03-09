const express = require("express");
const router = express.Router();
const pizzaModel = require("../models/pizzaModel");

router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
    console.log(pizzas);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/addpizza", async (req, res) => {
  const pizza = req.body.pizza;
  try {
    const newPizza = new pizzaModel({
      name: pizza.name,
      image: pizza.image,
      varients: ["small", "medium", "large"],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
    });
    console.log(newPizza);
    await newPizza.save();
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/getpizzabyid", async(req,res)=>{
  const pizzaid = req.body.pizzaid;
  try {
    const pizza = await pizzaModel.findOne({ _id: pizzaid})
    res.send(pizza)
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/editpizza" ,async (req,res) =>{
  const editedpizza = req.body.editedpizza;
  try {
    const pizza = await pizzaModel.findOne({_id: editedpizza._id});
    pizza.name = editedpizza.name, 
    pizza.description = editedpizza.description,
    pizza.image = editedpizza.image,
    pizza.category = editedpizza.category,
    pizza.prices = [editedpizza.prices]

    await pizza.save();
    res.status("Updated successfully");

  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/deletepizza" , async (req,res) =>{
  const pizzaid = req.body.pizzaid;
  try {
    await pizzaModel.findOneAndDelete({ _id: pizzaid });
    swal("User Deleted Succss!", "success");
  } catch (error) {
    res.json({ message: error });
    swal("Something went worng", "error");
  }
})

module.exports = router;
 