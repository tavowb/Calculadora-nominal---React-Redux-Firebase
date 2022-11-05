import { db } from "../firebase/config-firebase";
import { types } from "../types/types";

/* Este archivo me va crear documentos, editarlos, borrarlos... */
export const crearRegistro = ({ pago, horas }) => {
  return async (dispatch, getState) => {
    const { id } = getState().auth;
    const calculo = pago * horas;
    const datos = {
      fecha: new Date(),
      pago: calculo,
    };

    const referencia = await db.collection(`${id}/nominas/nomina`).add(datos);
    console.log(referencia);
  };
};

export const leerRegistros = (data) => {
  return {
    type: types.nominaRead,
    payload: data,
  };
};
