import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="page-wrapper">
      <div className="form-wrapper">
        <label>Enter Your Name</label>
        <input className="form-control" placeholder="Name" type="email" />
        <label>Enter Your Mobile Number</label>
        <input className="form-control" placeholder="Phone" type="email" />
        <label>Enter Your Email</label>
        <input className="form-control" placeholder="Password" type="email" />
        <label>Enter your password</label>
        <input
          className="form-control"
          placeholder="password"
          type="password"
        />
        <button className="btn btn-primary">SignUp</button>
        <span style={{marginTop : "20px"}}>
          Existing User {" "}
          <Link className="btn btn-outline-primary" to="/Login">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}
