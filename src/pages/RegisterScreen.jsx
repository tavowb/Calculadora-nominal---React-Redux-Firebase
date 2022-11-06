import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const { email, username, password, password2 } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim().length < 2) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }

    dispatch(register(email, password, username));
  };

  return (
    <div className="container">
      <h3>Register Page</h3>
      <hr />

      <div className="row container animate__animated animate__zoomIn">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                id="icon_prefix"
                type="email"
                className="validate"
              />
              <label htmlFor="icon_prefix">Email</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">person</i>
              <input
                onChange={handleChange}
                value={username}
                name="username"
                id="icon_prefix2"
                type="text"
                className="validate"
              />
              <label htmlFor="icon_prefix2">Username</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                id="icon_prefix3"
                type="password"
                className="validate"
              />
              <label htmlFor="icon_prefix3">Password</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password2}
                name="password2"
                id="icon_prefix4"
                type="password"
                className="validate"
              />
              <label htmlFor="icon_prefix4">Confirm Password</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light blue"
            type="submit"
            name="action"
          >
            Registrarse
            <i className="material-icons right">chevron_right</i>
          </button>
          <hr />
          <br />
          <Link to="/Login"> Login in to account </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
