import React from "react";
import { useSelector } from "react-redux";
import Element from "../components/Element";

import FormAdd from "../components/FormAdd";

const AppScreen = () => {
  const { auth } = useSelector((state) => state);
  const data = useSelector((state) => state.nomina.data);

  return (
    <>
      <div className="container">
        <h1 className="center"> Hola, {auth.username} </h1>
        <hr />

        <FormAdd />
        <table>
          <tbody>
            <tr>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Borrar</th>
            </tr>
          </tbody>

          <tbody>
            {data.map((elemento) => {
              return (
                <tr key={elemento.id}>
                  <Element data={elemento} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
