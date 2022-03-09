import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

function Ordersscreen() {
  AOS.init({
    duration: 1500,
  });

  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, loading } = orderstate;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: "30px" }}>My Orders</h2>
      <hr />
      <div
        data-aos="fade-down"
        className="row justify-content-center m-1"
        style={{ overflowX: "hidden" }}
      >
        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-8"
                style={{ background: "grey", color: "white" }}
              >
                <div className="flex-container">
                  <div className="text-left w-100 p-1">
                    <h3 style={{ fontSize: "20px" }}>Items</h3>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name} [{item.varient}] * {item.quantity} ={" "}
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 p-1">
                    <h3 style={{ fontSize: "20px" }}>Delivery Address</h3>
                    <hr />
                    <p>Address: {order.shippingAddress}</p>
                  </div>
                  <div className="text-left w-100 p-1">
                    <h3 style={{ fontSize: "20px" }}>Order Info</h3>
                    <hr />
                    <p>Order Amount: {order.orderAmount}</p>
                    <p>Date: {order.createdAt.substring(0, 10)}</p>
                    <p>Order Id: {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Ordersscreen;
