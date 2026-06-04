import api from "./api";

export const getSettings = async () => {
  const { data } = await api.get("/web-settings");
  return data?.data || [];
};

export const getFooter = async () => {
  const { data } = await api.get("/footer");
  return data?.data || {};
};

export const sendContactUs = async (formData) => {
  const { data } = await api.post(`/contact`, formData);
  return data?.data || [];
};
