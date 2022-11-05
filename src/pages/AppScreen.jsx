import React from "react";
import { useSelector } from "react-redux";

import FormAdd from "../components/FormAdd";

const AppScreen = () => {
  const { auth } = useSelector((state) => state);

  return (
    <>
      <div className="container">
        <h1 className="center"> Hola, {auth.username} </h1>
        <hr />

        <FormAdd />
      </div>
    </>
  );
};

export default AppScreen;
