import React, { useEffect, useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza, getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";


function Pizzaslist() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <>
      <div>
        <h4>Pizzas List </h4>
        {loading && <Loading />}

        <Filter />

        <div className="table-responsive-sm">
        <table className="table table-bordered">
          <thead style={{background: "black" , color: "white"}}>
            <tr>
              <th>Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza) => {
                return (
                  <tr>
                    <td>{pizza.name}</td>
                    <td>
                      Small : {pizza.prices[0]["small"]} <br />
                      Medium : {pizza.prices[0]["medium"]} <br />
                      Large : {pizza.prices[0]["large"]}
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                      <a href="/admin/pizzaslist"><i className="fa fa-trash m-1" onClick={() => { dispatch(deletePizza(pizza._id)) }}></i></a>
                        <Link to={`/admin/editpizza/${pizza._id}`}><i className="fa fa-edit m-1"></i></Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default Pizzaslist;
