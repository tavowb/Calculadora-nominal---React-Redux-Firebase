import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import React, {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { login } from "../actions/auth";
import { firebase } from "../firebase/config-firebase";

import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AuthRouter = () => {
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setName(user.displayName);
        setLog(true);
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter log={log}>
              <LoginScreen />
            </PublicRouter>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRouter log={log}>
              <RegisterScreen />
            </PublicRouter>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRouter log={log}>
              <AppRouter name={name} />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
};

export default AuthRouter;
