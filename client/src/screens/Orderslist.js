import React , {useState , useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";

function Orderslist() {
  const dispatch = useDispatch();

  const getordersstate = useSelector(state=> state.getAllOrdersReducer);

  const { orders, error, loading } = getordersstate;

  useEffect(() => {
    dispatch(getAllOrders())
  }, [])
  
  return (
    <>
      <div>
        <h4>Orders List </h4>
        {loading && <Loading />}
        <div className="table-responsive-sm">
          <table className="table table-bordered">
            <thead style={{ background: "black", color: "white" }}>
              <tr>
                <th>Order Id</th>
                <th>Email</th>
                <th>User Id</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map(order => {
                  return (
                    <tr>
                      <td>{order._id}</td>
                      <td>{order.email}</td>
                      <td>{order.userid}</td>
                      <td>{order.orderAmount}</td>
                      <td>{order.createdAt.substring(0,10)}</td>
                      <td>
                        {order.isDelivered 
                        ? 
                          (<h1 style={{color: 'grey'}}>Delivered</h1>) 
                        : 
                          (<button className="btn-primary rounded-full text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)
                        }

                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Orderslist
