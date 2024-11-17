import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const sign = () => {
  const { handleGoogleSingIn, handleSignIn, handleSignOut} = useContext(authContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({email, password});
    handleSignIn(email, password)
  };
  return (
    <div className="card bg-base-100 w-full max-w-lg mx-auto mt-10 shrink-0 shadow-2xl">
      <form onSubmit={handleFormSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h2 className="text-center mb-4 font-semibold">
        Dont’t Have An Account ? <NavLink className="text-red-600" to="/signUp">Sign Up</NavLink>
      </h2>
      <button onClick={handleSignOut}>sign Out</button>
    </div>
  );
};

export default sign;
