import instance from "./interceptor";

export function get(endPoint, params = {}){
  return instance.get(endPoint, params);
}

export function post(endPoint, params = {}, headers = {}) {
  return instance.post(endPoint, params, headers);
}

export const api = {
  LOGIN:'/auth/login',
  CONTACT:'/contact-us'
}

export const token = {
  set: (token) => {
    localStorage.setItem("acccess_token", token);
  },
  get: () => {
    return localStorage.getItem("acccess_token");
  }
}