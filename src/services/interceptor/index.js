import axios from "axios";

export const http = axios.create({
  baseURL: "http://87.107.2.216:3001",
});

http.interceptors.request.use(
  (req) => req,
  (error) => error,
);

http.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error),
);
