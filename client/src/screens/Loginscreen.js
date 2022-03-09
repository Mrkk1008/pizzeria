import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px", color:'#FE5F1E '}}>
            Login
          </h2>

          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}
          <div>
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <br />
            <button
              class="btn-primary rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={login}
            >
              Log In
            </button>
            <a class="login-a inline-block align-baseline font-bold text-sm m-2" href="/register">
              Don't have account?
            </a>
          </div>
        </div>
      </div>

      {/* <section class="login flex justify-center pt-24">
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {loading && <Loading />}
            {error && <Error error="Invalid Credentials" />}
            <div class="mb-4">
              <label class="block text-black-700 text-lg font-bold mb-2" for="username">
                Email
              </label>
              <input name="email"
                class="form-control"
                id="username" type="email" placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                autoComplete="off"/>
            </div>
            <div class="mb-6">
              <label class="block text-black-700 text-lg font-bold mb-2" for="password">
                Password
              </label>
              <input name="password"
                class="form-control"
                id="password" type="password" placeholder="******************"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}/>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="btn-primary rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={login}
                >
                Log In
              </button>
              <a class="login-a inline-block align-baseline font-bold text-sm" href="/register">
                Don't have account?
              </a>
            </div>
          </form>
        </div>
      </section> */}
    </div>
  );
}
