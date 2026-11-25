import axios from "axios";

export const http = axios.create({
  baseURL: "http://87.107.2.216:3001",
  // baseURL:"https://fe-api.hexorix.net"
});

http.interceptors.request.use(
  (req) =>{
  const token =localStorage.getItem("accessToken")
  req.headers.Authorization=`Bearer${token}`
  return req
  },
  (error) => error,
);

http.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error),
);
