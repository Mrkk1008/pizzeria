import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { deleteUser, getAllUsers } from "../actions/userActions";

function Userslist() {
  const userstate = useSelector((state) => state.getAllUsersReducer);
  const { error, loading, users } = userstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      <div>
        <h1>Users list</h1>
        {loading && <Loading />}
        <table className="table table-striped table-bordered table-responsive-sm">
          <thead
            className="thead"
            style={{ background: "black", color: "white" }}
          >
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <a href="#"><i
                        className="fa fa-trash"
                        onClick={() => {
                          dispatch(deleteUser(user._id));
                        }}
                       ></i></a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Userslist;
