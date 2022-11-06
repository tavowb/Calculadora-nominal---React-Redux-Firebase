import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/auth";
import { limpiar } from "../actions/nomina";

const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(limpiar());
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="#00796b teal darken-2">
      <div className="nav-wrapper">
        <span className="brand-logo">
          Calculadora nominal <i className="material-icons right "> grid_on</i>
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button
              onClick={handleLogout}
              className="btn red waves-effect waves-light"
            >
              Logout
            </button>
          </li>
          <li>
            <h1>s</h1>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
