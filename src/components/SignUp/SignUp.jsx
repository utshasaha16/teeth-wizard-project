import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const SignUp = () => {
    const {handleSignUp} = useContext(authContext);
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        console.log({name, image, email, password, conPassword});
        handleSignUp(email, password)
    }
  return (
    <div className="card bg-base-100 w-full max-w-lg mt-10 mx-auto shrink-0 shadow-2xl">
      <form onSubmit={handleFormSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Image"
            className="input input-bordered"
            required
          />
        </div>
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
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="text"
            name="conPassword"
            placeholder="Confirm Password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <p className="text-center font-semibold mb-4">AllReady Have An Account ? <NavLink className="text-red-600" to="/signIn">Sign In</NavLink></p>
    </div>
  );
};

export default SignUp;
