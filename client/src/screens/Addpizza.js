import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaActions";
import swal from 'sweetalert';


function Addpizza() {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  
  

  const addPizzastate = useSelector((state) =>state.addPizzaReducer);
  const { success, error } = addPizzastate;

  const dispatch = useDispatch();
  function formHandler(e){
    e.preventDefault();
    
    const pizza = {
        name,
        image,
        description,
        category,
        prices:{
            small: smallprice,
            medium: mediumprice,
            large: largeprice,
        },
    };
    console.log(pizza);
    dispatch(addPizza(pizza));
    swal({
      title: pizza.name,
      text: "Pizza added",
      icon: "success",
    });
    window.location.href = "/admin/pizzaslist";
  }

  return (
    <>
      <div>
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <h1>Add New Pizza</h1>
          <form onSubmit={formHandler}>
            <input
              className="form-control"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              required
            />
            <input
              className="form-control"
              type="text"
              placeholder="small varient price"
              value={smallprice}
              onChange={(e) => {
                setsmallprice(e.target.value);
              }}
              required
            />
            <input
              className="form-control"
              type="text"
              placeholder="medium varient price"
              value={mediumprice}
              onChange={(e) => {
                setmediumprice(e.target.value);
              }}
              required
            />
            <input
              className="form-control"
              type="text"
              placeholder="large varient price"
              value={largeprice}
              onChange={(e) => {
                setlargeprice(e.target.value);
              }}
              required
            />
            <input
              className="form-control"
              type="text"
              placeholder="category"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              required
            />
            <input
              className="form-control"
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              required
            />
            <input
              className="form-control"
              type="text"
              placeholder="image url"
              value={image}
              onChange={(e) => {
                setimage(e.target.value);
              }}
              required
            />
            <br/>
            <button className="btn-primary rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Pizza</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addpizza;
