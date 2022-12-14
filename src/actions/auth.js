import { firebase, googleAuthProvider } from "../firebase/config-firebase";
import { types } from "../types/types";

export const googlelogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then();
  };
};

export const emailAndPLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const register = (email, password, username) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: username });

        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (id, username) => {
  return {
    type: types.login,
    payload: {
      id,
      username,
    },
  };
};

export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch({
      type: types.logout,
    });
  };
};
