import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import firebase from "./firebaseConfig";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass);

      if (user) {
        alert("Account created successfully");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <section className="main_container_signup">
        <div className="header">
          <h2>Signup</h2>
        </div>
        <div className="box">
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
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
          Already have an acount{" "}
          <Link to="/login" className="link">
            login here
          </Link>
        </p>

        <button onClick={submit}>SignUp</button>
      </section>
    </>
  );
};

export default Signup;
