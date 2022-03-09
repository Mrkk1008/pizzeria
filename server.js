const express = require("express");
const pizza = require("./models/pizzaModel");
const db = require("./db");
const app = express();


const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");
//const path = require('path')



app.use(express.json()); //Sequence matters first express.json nd then routes

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);


if(process.env.NODE_ENV === 'production'){
  app.use('/', express.static('client/build'))
  app.get('*',(req , res)=>{
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
  })
}



const port = process.env.PORT || 8000;

app.listen(port, () => "server running on port");

