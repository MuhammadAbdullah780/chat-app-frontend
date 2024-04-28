import _axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

const axiosApi = _axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export default axiosApi;
