import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="form-wrapper">
        <label>Enter Your Email</label>
        <input className="form-control" placeholder="email" type="email" />
        <label>Enter your password</label>
        <input className="form-control" placeholder="password" type="password" />
        <button className="btn btn-primary">Login</button>
        <span>New to Fabristore <Link className="btn btn-outline-primary" to="/Signup">SignUp</Link></span>
      </div>
    </>
  );
}
