import axios from 'axios';


const apiURL = 'https://reqres.in/api';

const AuthActiontype = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS"
}


const LoginAuthAction = (userState, history) => {
  return async (dispatch) => {

    try {
      const response = await axios.post(`${apiURL}/login`, userState);

      const {
        data
      } = response;

      dispatch({
        type: AuthActiontype.LOGIN_SUCCESS,
        payload: data,
      });
      console.log("data", response);
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: AuthActiontype.LOGIN_FAILED,
        payload: err.message,
      });
    }



  }

  //return console.log(userState);
}

const LogoutAuthAction = (history) => {
  return (dispatch) => {

    dispatch({
      type: AuthActiontype.LOGOUT_SUCCESS,
      payload: {},
    });
    history.push("/");
  }

  
}

export {
  LoginAuthAction,
  LogoutAuthAction
}