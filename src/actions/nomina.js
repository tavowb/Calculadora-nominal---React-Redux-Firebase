import { db } from "../firebase/config-firebase";
import { types } from "../types/types";

export const crearRegistro = ({ pago, horas }) => {
  return async (dispatch, getState) => {
    const { id } = getState().auth;
    const calculo = pago * horas;
    const datos = {
      fecha: new Date().toLocaleDateString(),
      pago: calculo,
    };

    const referencia = await db.collection(`${id}/nominas/nomina`).add(datos);

    const ide = await referencia.id;
    console.log(ide);

    const newData = {
      ...datos,
      id: ide,
    };

    dispatch(crear(newData));
  };
};

export const leerRegistros = (data) => {
  return {
    type: types.nominaRead,
    payload: data,
  };
};

export const crear = (data) => {
  return {
    type: types.nominaAdd,
    payload: data,
  };
};
