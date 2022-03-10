import { React, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
//import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import useRazorpay from "react-razorpay";
import swal from "sweetalert";
export default function Checkout({ subtotal }) {

  const Razorpay = useRazorpay();
  const dispatch = useDispatch();

  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  const handlePayment =  () => {
  const order = dispatch(placeOrder(subtotal));
    
    const options = {
      key: "rzp_test_9GGv1v0tWxEApF",
      amount: subtotal * 100,
      currency: "INR",
      name: currentUser.name,
      handler: (res) => {
        console.log(res);
        swal({
          title: "Payment success",
          icon: "success",
          timer: 5000,
        });
        localStorage.removeItem("cartItems");
        window.location.href = "/";
      },
      notes: {
        address: currentUser.address,
        email: currentUser.email,
        contact: currentUser.contact
      },
      theme: {
        color: "#3399cc",
      },
      //callback_url: 'https://pizzeria108.herokuapp.com/',
      //redirect: true
//       method: { // For only true selected method and for anroid webview
//       netbanking: true,
//       card: true,
//       wallet: true,
//       upi: true
//       },
    };
    const rzpay = new Razorpay(options);
    rzpay.open();

    rzpay.on('payment.failed', function (response) {
      swal({
        title: "Payment failed",
        icon: "error",
        timer: 5000,
      });
    });
  };
  
  return (
    <div>
      <button id="rzp-button1" className="btn" onClick={handlePayment}>Pay Now</button>
    </div>
  );
}
