import apiClient from "./api";


export const getVaccines = async () => {
  const response = await apiClient.get(`/common/products`);
  return response.data;
};


export const getVaccineById = async (id:string) => {
  const response = await apiClient.get(`/staff/product/${id}`);
  return response.data;
};
