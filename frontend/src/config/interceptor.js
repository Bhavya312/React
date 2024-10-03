import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3005/api/v1",
  headers:{"Content-Type":"application/json"}
});

//request interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  }, (error) => {
    return Promise.reject(error)
  }
)

//response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  }, (error)  => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default instance