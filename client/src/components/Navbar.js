/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  return (
      // <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-black rounded">
      //   <a
      //     style={{ textDecoration: "none", fontSize: "22px" }}
      //     className="d-inline p-1 bg-danger text-black rounded"
      //     href="/"
      //   >
      //     PizzaGalaxy
      //   </a>
      //   {/* <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNav"
      //     style={{background: 'white'}}
      //   >
         
      //   </button> */}
      // <div class="md:hidden flex items-center">
      //   <button class="outline-none mobile-menu-button">
      //     <svg
      //       class="w-6 h-6 text-gray-500"
      //       x-show="!showMenu"
      //       fill="none"
      //       stroke-linecap="round"
      //       stroke-linejoin="round"
      //       stroke-width="2"
      //       viewBox="0 0 24 24"
      //       stroke="currentColor"
      //       data-toggle="collapse"
      //       data-target="#navbarNav"
      //     >
      //       <path d="M4 6h16M4 12h16M4 18h16"></path>
      //     </svg>
      //   </button>
      // </div>
      //   <div className="collapse navbar-collapse" id="navbarNav">
      //     <ul className="navbar-nav ms-auto">
            // {currentUser ? (
            //   <div className="dropdown mt-2">
            //     <a
            //       href="/"
            //       style={{ color: "white",textDecoration:"none" }}
            //       className="dropdown-toggle"
            //       type="button"
            //       id="dropdownMenuButton"
            //       data-toggle="dropdown"
            //       aria-haspopup="true"
            //       aria-expanded="false"
            //     >
            //       {currentUser.name}
            //     </a>
            //     <div
            //       className="dropdown-menu"
            //       aria-labelledby="dropdownMenuButton"
            //     >
            //       <a className="dropdown-item" href="/cart">
            //         Orders
            //       </a>
            //       <a
            //         className="dropdown-item"
            //         href="/"
            //         onClick={() => {
            //           dispatch(logoutUser());
            //         }}
            //       >
            //         <li>Logout</li>
            //       </a>
            //     </div>
            //   </div>
            // ) : (
            //   <li className="nav-item">
            //     <a className="nav-link" href="/login">
            //       Login
            //     </a>
            //   </li>
            // )}

      //     <li class="ml-6">
      //         <a href="/cart" class="inline-block px-4 py-2 rounded-full flex items-center"><span class="text-white font-bold pr-3">{cartstate.cartItems.length}</span></a>
      //     </li>
      //     </ul>
      //   </div>
      // </nav> 
      <>
        <nav class="container mx-auto flex items-center justify-between py-3">
          <div>
            <a href="/"><img src="/img/logo.png" alt="logo" /></a>
          </div>
          <div>
            <ul class="flex items-center">
              {currentUser ? (
                <div className="dropdown mt-2"  >
                  <a href="/" style={{ color: "black", textDecoration: "none", margin: "8px" }}>Home</a>
                  <a href="/menu" style={{ color: "black", textDecoration: "none",margin: "10px" }}>Menu</a>
                  <a
                    href="/"
                    style={{ color: "black", textDecoration: "none" }}
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {currentUser.name}
                  </a>
                  
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/orders">
                      My Orders
                    </a>
                    <a
                      className="dropdown-item"
                      href="/"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      <li>Logout</li>
                    </a>
                  </div>
                </div>
              ) : (
                  <li class="ml-6"><a href="/menu" style={{ textDecoration: "none", marginRight: "8px" }}>Menu</a><a href="/login">Login</a></li>
              )}
              <li class="ml-6">
                <a href="/cart" class="inline-block px-4 py-2 rounded-full flex items-center"><span class="text-white font-bold pr-3">{cartstate.cartItems.length}</span><img src="/img/cart.png" alt="cart" /></a>
              </li>
            </ul>
          </div>
        </nav>
      </> 
  );
}
