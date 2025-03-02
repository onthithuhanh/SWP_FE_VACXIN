import apiClient from "./api";

export const getPosts = async () => {
  const response = await apiClient.get(`/staff/posts`);
  return response.data;
};

export const getPostById = async (id: string) => {
  const response = await apiClient.get(`/staff/posts/${id}`);
  return response.data;
};
