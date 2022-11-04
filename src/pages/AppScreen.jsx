import React from "react";
import { useSelector } from "react-redux";

const AppScreen = () => {
  const { auth } = useSelector((state) => state);
  console.log(auth);

  return (
    <>
      <div className="container">
        <h1 className="center"> Hola, {auth.username} </h1>
        <hr />
      </div>
    </>
  );
};

export default AppScreen;
