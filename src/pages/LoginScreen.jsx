import React from "react";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { emailAndPLogin, googlelogin } from "../actions/auth";
import { useState } from "react";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleGoogleLogin = () => {
    dispatch(googlelogin());
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPLogin(email, password));
  };

  return (
    <div className="container animate__animated animate__zoomIn ">
      <h3>Login Page</h3>
      <hr />

      <div className="row container">
        <form onSubmit={handleEmailLogin} className="col s12">
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
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                id="icon_prefix2"
                type="password"
                className="validate"
              />
              <label htmlFor="icon_prefix2">Password</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light blue"
            type="submit"
            name="action"
          >
            Enviar
            <i className="material-icons right">chevron_right</i>
          </button>
          <hr />
          <GoogleButton onClick={handleGoogleLogin} />
          <br />
          <Link to="/register"> Register in the platform </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
