import axios from "axios";

const api2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_Bkend_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api2;