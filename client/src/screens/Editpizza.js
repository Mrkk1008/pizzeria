import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPizza, getPizzaById } from "../actions/pizzaActions";
import swal from 'sweetalert';


function Editpizza({ match }) {
  const dispatch = useDispatch();

  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const {pizza , error , loading} = getpizzabyidstate;
   useEffect(() => {
    if(pizza){
        if(pizza._id === match.params.pizzaid)
        {
            setname(pizza.name);
            setdescription(pizza.description);
            setcategory(pizza.category);
            setimage(pizza.image);
            setsmallprice(pizza.prices[0]["small"]);
            setmediumprice(pizza.prices[0]["medium"]);
            setlargeprice(pizza.prices[0]["large"]);

        }else{
            dispatch(getPizzaById(match.params.pizzaid));
        }
    }else{
        dispatch(getPizzaById(match.params.pizzaid));
    }  
  }, [pizza , dispatch]);

    function formHandler(e) {
        e.preventDefault();

        const editedpizza = {
            _id : match.params.pizzaid,
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice,
            },
        };
        console.log(editedpizza);
        dispatch(editPizza(editedpizza));
        swal({
            title: pizza.name,
            text: "Pizza updated",
            icon: "success",
        });
        window.location.href = "/admin/pizzaslist";
    }
  return (
    <div>
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Edit Pizza</h1>  
        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            
          />
          <input
            className="form-control"
            type="text"
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
            
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
            
          />
          <input
            className="form-control"
            type="text"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
            
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
            
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
            
          />
          <br />
          <button
            className="btn-primary rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Pizza
          </button>
        </form>
      </div>
    </div>
  );
}

export default Editpizza;
