import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Cartscreen() {

  AOS.init({
    duration: 1500
  })

  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;



  return (
    <div>
      {/* <section class="cart py-16">
        <div class="order container mx-auto w-1/2">
          <div class="flex items-center border-b border-grey-300 pb-4">
            <img src="/img/cart-black.png" alt="" />
            <h1 class="font-bold ml-4 text-2xl">Order summary</h1>
          </div>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div class="pizza-list">
                  <div class="flex items-center my-8">
                    <img class="w-24 " src={item.image} alt="" />
                    <div class="flex-1 ml-4">
                      <h1>{item.name}[{item.varient}]</h1>
                      <h1 class="flex-1">
                        Price: {item.quantity}*{item.prices[0][item.varient]} =
                        {item.price}
                      </h1>
                      <span class="flex-1" >Quantity : </span>
                      <i
                        className="fa fa-minus"
                        aria-hidden="true"
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      ></i>
                      <b>{item.quantity}</b>
                      <i
                        className="fa fa-plus"
                        aria-hidden="true"
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      ></i>
                    </div>
                   
                  </div>
                </div>
                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div class="text-right py-4">
          <div>
            <span class="text-lg font-bold">Total Amount</span>
            <span class="amount text-2xl font-bold ml-2">SubTotal : {subtotal} /-</span>
            <Checkout subtotal={subtotal} />
          </div>
        </div>

      </section> */}
      <div data-aos="fade-down" class="cart">
        {cartItems.length > 0 ?

          <div class="order container mx-auto w-1/2 xl:w-1/2">
            <div class="flex items-center border-b border-grey-300 pb-4">
              <img src="/img/cart-black.png" alt="" />
              <h1 class="font-bold ml-4 text-2xl">Order summary</h1>
            </div>

            {cartItems.map((item) => {
              return (
                <div class="pizza-list">
                  <div class="flex items-center my-8">
                    <img class="w-24 " src={item.image} alt="" />
                    <div class="flex-1 ml-1">
                      <p>{item.name}[{item.varient}]</p>
                    </div>

                    <span class="font-bold text-lg ">Price: {item.quantity}*{item.prices[0][item.varient]} =
                      {item.price}

                    </span>
                    <span class="flex-1">Quantity :
                      <i
                        className="fa fa-minus"
                        aria-hidden="true"
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      ></i>
                      <b>{item.quantity}</b>
                      <i
                        className="fa fa-plus"
                        aria-hidden="true"
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      ></i>
                    </span>
                    <i
                      className="fa fa-trash ml-1"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    ></i>
                   
                  </div>
                </div>
              );
            })}
            <hr />
            {currentUser  ?
              <div class="text-right py-4">
                <div>
                  <span class="amount text-2xl font-bold ml-2">SubTotal : {subtotal} /-</span>
                </div>
                <div>
                  <Checkout subtotal={subtotal} />
                </div>
              </div>
              : <a href="/login"
                class="inline-block cursor-pointer btn-primary px-6 py-2 rounded-full text-white font-bold mt-6" style={{textDecoration: 'none'}}>Login
                to continue</a>
            }
          </div>
          :   <div class="container mx-auto text-center">
                <h1 class="text-3xl font-bold mb-1">Cart Empty 😕</h1>
                <p class="text-gray-500 text-lg mb-10">You probably haven't ordered a pizza yet.
                  <br/>To order a pizza, go to the main page.</p>
                <img class="w-2/5 mx-auto" src="/img/empty-cart.png" alt="empty-cart"/>
                  <a href="/" class="inline-block px-6 py-1 rounded-full btn-primary text-white font-bold mt-3" style={{textDecoration:'none'}}>Go back</a>
              </div>
          } 
      </div>
    </div>
  );
}
