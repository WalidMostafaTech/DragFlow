import api from "./api";

export const getHome = async () => {
  const { data } = await api.get("/home");
  return data?.data || {};
};

export const getStores = async () => {
  const { data } = await api.get("/warehouses/web");
  return data?.data || {};
};

export const getBlogs = async () => {
  const { data } = await api.get("/blogs");
  return data?.data || {};
};

export const getBlogDetails = async (slug) => {
  const { data } = await api.get(`/blogs/${slug}`);
  return data?.data || {};
};

export const getPages = async (page) => {
  const { data } = await api.get(`page/${page}`);
  return data?.data || {};
};
