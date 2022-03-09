import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [contact, setcontact] = useState();
  const [cpassword, setcpassword] = useState("");
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;

  const dispatch = useDispatch();
  function register() {
    if (password !== cpassword) {
      alert("Passwords not matched");
    } else {
      const user = {
        name,
        email,
        password,
        address,
        contact
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email already registered" />}
          <h2 className="text-center m-2" style={{ fontSize: "35px", color: '#FE5F1E '}}>
            Register
          </h2>
          <div>
            <input
              required
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="Address"
              className="form-control"
              value={address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="Contact"
              className="form-control"
              value={contact}
              onChange={(e) => {
                setcontact(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="Re-enter Password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <br />
            <button
              class="btn-primary rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" onClick={register}>
              Register
            </button>
            <a class="login-a inline-block align-baseline font-bold text-sm m-2" href="/login">
              Already have account?
            </a>
          </div>
        </div>
      </div>
      {/* <section class="login flex justify-center pt-12">
        <div class="w-full max-w-xs">
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email already registered" />}
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Name
              </label>
              <input name="name"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Enter your name" required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                
                }}/>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Email
              </label>
              <input name="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="email" placeholder="Enter your email" value={email} required
                onChange={(e) => {
                  setemail(e.target.value);
                }}/>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input name="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="******************" value={password} required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}/>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" >
                Re-enter Password
              </label>
              <input name="Re-enter Password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required
                type="password"
                placeholder="Re-enter Password"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}/>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="btn-primary rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit" onClick={register}>
                Register
              </button>
              <a class="login-a inline-block align-baseline font-bold text-sm" href="/login">
                Already have account?
              </a>
            </div>
          </form>
        </div>
      </section> */}
    </div>
  );
}
