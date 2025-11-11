import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-semibold text-center mt-5">
          Login Your Account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center mt-5">
              Don't Have An account ?{" "}
              <Link
                to="/auth/register"
                className="text-red-500 hover:text-underline"
              >
                Register
              </Link>{" "}
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
