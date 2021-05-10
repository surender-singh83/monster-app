import Axios from "axios";

const AuthActiontype = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS"
}

let userContents = {
  isLogged: false,
  error: "",
  user: {
    email: '',
    password: ''
  }
};

const getAuthState = () => {
  const auth = localStorage.getItem("auth");

  try {

    const authObj = JSON.parse(auth);
    const {
      token
    } = authObj.user;
    if (token) {
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return authObj;

    }

    return userContents;

  } catch (error) {
    return userContents;
  }

}

const newAuth = getAuthState();

const loginReducer = (state = newAuth, action) => {
  switch (action.type) {
    case AuthActiontype.LOGIN_SUCCESS:
      const newAuthState = {
        isLogged: true,
        user: action.payload,

      };
      localStorage.setItem("auth", JSON.stringify(newAuthState));
      return newAuthState;
    case AuthActiontype.LOGIN_FAILED:
      return {
        isLogged: false,
        user: state.user,
        error: action.payload,
      };
    case AuthActiontype.LOGOUT_SUCCESS:
      localStorage.removeItem("auth");
      return userContents;

    default:
      return state;
  }

  //return console.log(action)
}


export default loginReducer