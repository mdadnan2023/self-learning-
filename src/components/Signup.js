import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created");
      setEmail("")
      setPassword("")
    } catch (err) {
      console.log(err)
      alert("Invalid email and password")
    }
  };
  return (
    <div className="page-wrapper">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        {/* <label>Enter Your Name</label>
        <input className="form-control" placeholder="Name" type="email" />
        <label>Enter Your Mobile Number</label>
        <input className="form-control" placeholder="Phone" type="email" /> */}
        <h2>Sign up</h2>
        <label>Enter Your Email</label>
        <input
          className="form-control"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Enter your password</label>
        <input
          className="form-control"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
        <span style={{ marginTop: "20px" }}>
          Existing User{" "}
          <Link className="btn btn-outline-primary" to="/Login">Login</Link>
        </span>
      </form>
    </div>
  );
}
