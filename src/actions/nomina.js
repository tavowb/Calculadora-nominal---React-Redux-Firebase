import { db } from "../firebase/config-firebase";

/* Este archivo me va crear documentos, editarlos, borrarlos... */
export const crearRegistro = () => {
  return async (dispatch, getState) => {
    const { id } = getState().auth;
    const datos = {
      fecha: new Date(),
      pago: 130.0,
    };

    const referencia = await db.collection(`${id}/nominas/nomina`).add(datos);
  };
};
