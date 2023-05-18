import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-eazyhome-t14.onrender.com",
  timeout: 50000,
});

export default api;
