import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("Logged In Successfully");
      alert("Logged In Successfully");
    } catch (err) {
      console.log(err)
      alert("Invalid email and password")
    }
  };

  return (
    <div className="page-wrapper">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <label>Enter Your Email</label>
        <input
          className="form-control"
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Enter your password</label>
        <input
          className="form-control"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <span style={{ marginTop: "20px" }}>
          New to Fabristore{" "}
          <Link className="btn btn-outline-primary" to="/Signup">
            SignUp
          </Link>
        </span>
      </form>
    </div>
  );
}
