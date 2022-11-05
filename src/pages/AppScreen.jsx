import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearRegistro } from "../actions/nomina";

const AppScreen = () => {
  const { auth } = useSelector((state) => state);
  console.log(auth);

  const dispatch = useDispatch();

  const handleCrear = () => {
    console.log("eche");
    dispatch(crearRegistro());
  };

  return (
    <>
      <div className="container">
        <h1 className="center"> Hola, {auth.username} </h1>
        <hr />
        <button className="btn btn-primary" onClick={handleCrear}>
          Crear
        </button>
      </div>
    </>
  );
};

export default AppScreen;
