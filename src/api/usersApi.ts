// src/services/userService.ts
import { FormData, User } from "@/lib/users";
import apiClient from "./api";

export const getMyInfo = async () => {
  const response = await apiClient.get(`/users/myInfo`);
  return response.data;
};

export const getUserChildProfile = async (id: string) => {
  const response = await apiClient.get(`/users/${id}/child-profile`);
  return response.data;
};
export const verifyUser = async (data: User) => {
  const response = await apiClient.post(`/users/verify`, data);
  return response.data;
};

export const resendUser = async (data: User) => {
  const response = await apiClient.post(`/users/resend`, data);
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (userData: FormData) => {
  const response = await apiClient.post("/users/createUser", userData);
  return response.data;
};

export const updateUser = async (id: string, userData: User) => {
  const response = await apiClient.put(`/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id: string) => {
  await apiClient.delete(`/users/${id}`);
};

export const getUserVaccinationHistory = async (id: string) => {
    const response = await apiClient.get(`/users/${id}/vaccination-history`);
    return response.data;
};

export const updateUserBooking = async (id: string, bookingData: string,) => {
    const response = await apiClient.put(`/users/${id}/update-booking`, bookingData,);
    return response.data;
};

export const deleteUserBooking = async (id: string) => {
    await apiClient.delete(`/users/${id}/delete-booking`);
};