import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

let reduxStore;

export const injectStore = (store) => {
  reduxStore = store;
};

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const lang = reduxStore?.getState()?.language?.lang || "ar";
  config.headers.lang = lang;

  return config;
});

export default api;
