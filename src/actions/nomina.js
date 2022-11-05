import { db } from "../firebase/config-firebase";

/* Este archivo me va crear documentos, editarlos, borrarlos... */
export const crearRegistro = () => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;

    const datos = {
      fecha: new Date(),
      pago: 300.0,
    };

    const referencia = db.collection(`${uid}/nominas/nomina`).add(datos);
  };
};
