import axios, { type AxiosInstance } from "axios";

const API_BASE: string = import.meta.env.VITE_API_BASE || "";

const client: AxiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
});

export default client;
