import apiClient from "./api";


export const getVaccines = async () => {
  const response = await apiClient.get(`/vaccines`);
  return response.data;
};


export const getVaccineById = async (id:string) => {
  const response = await apiClient.get(`/vaccines/${id}`);
  return response.data;
};
