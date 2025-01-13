import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 60000,
  timeoutErrorMessage: "Server Timed out...",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
