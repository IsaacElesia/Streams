import { SIGN_IN, SIGN_OUT } from "./types";

//"react": "^16.8.6",
//"react-dom": "^16.8.6",
// "react-redux": "^6.0.1",
//"react-router-dom": "^5.0.0",
//"react-scripts": "2.1.8",
//"redux": "^4.0.1",
//"redux-form": "^8.1.0"

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
