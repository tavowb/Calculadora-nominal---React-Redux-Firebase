import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina";

const FormAdd = () => {
  const dispatch = useDispatch();

  const [viewForm, setViewForm] = useState(false);
  const [CantidadPago, setCantidadPago] = useState({
    pago: 0,
    horas: 0,
  });

  const { pago, horas } = CantidadPago;

  const handleChange = (e) => {
    setCantidadPago({
      ...CantidadPago,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleSave = () => {
    dispatch(crearRegistro(CantidadPago));
  };

  return (
    <div>
      <button className="btn " onClick={handleAdd}>
        {!viewForm ? "Agregar " : "Cerrar"}
      </button>
      {viewForm && (
        <>
          <input
            type="number"
            placeholder="Ingrese la Cantidad de pago por hora"
            name="pago"
            value={pago}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Ingrese la Cantidad de Horas trabajadas"
            name="horas"
            value={horas}
            onChange={handleChange}
          />

          <button className="btn purple" onClick={handleSave}>
            Calcular y Guardar
          </button>
        </>
      )}
    </div>
  );
};

export default FormAdd;
