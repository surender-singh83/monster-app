import axios from 'axios';
import './interceptor';

function userLogin(userDetails) {
  return dispatch => {
    let data = { email: userDetails.email, password: userDetails.password }
    return axios.post(`http://localhost:8000/auth/login`, data).then(res => {
      dispatch({
        type: "SET_AUTH",
        data: res.data
      });
      return res.data
    }).catch(err => {
      return false
    })
  }
}

export default userLogin;
