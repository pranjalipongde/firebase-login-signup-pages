import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import firebase from "./firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, pass);

      if (user) {
        alert("Login successfully");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <section className="main_container_signup">
        <div className="header">
          <h2>Login</h2>
        </div>

        <div className="box">
          <input
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="box">
          <input
            type="text"
            value={pass}
            placeholder="Enter Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <p>
          Don't have an acount{" "}
          <Link to="/" className="link">
            Create Acount here
          </Link>
        </p>

        <button onClick={submit}>Login</button>
      </section>
    </>
  );
};

export default Login;
