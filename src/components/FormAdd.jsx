import React from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina";

const FormAdd = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(crearRegistro());
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleAdd}>
        Crear
      </button>
    </div>
  );
};

export default FormAdd;
