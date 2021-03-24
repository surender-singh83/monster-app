
import axios from 'axios';

const URL_API = process.env.REACT_APP_SERVER_HOST || "/";
const Api_Key = process.env.REACT_APP_SERVER_API_KEY || "/";

axios.interceptors.request.use((reConfig) => {
  const auth = localStorage.getItem("token");
  reConfig.headers = {
    'Api-Key': Api_Key
  };
  if (auth) {
    reConfig.headers = {
      authorization: "Bearer " + auth,
      'Api-Key': Api_Key
    };
  }
  reConfig.baseURL = URL_API;
  return reConfig;
},
  (error) => {
    Promise.reject(error)
  }
);

axios.interceptors.response.use(
  (response) =>
    response,
  (error) => {
    Promise.reject(error)
  }
);