// src/services/userService.ts
import { FormData, User, VerifyUser } from "@/lib/users";
import apiClient from "./api";

export const getMyInfo = async () => {
  const response = await apiClient.get(`/user/myInfo`);
  return response.data;
};

export const getUserChildProfile = async (id: string) => {
  const response = await apiClient.get(`/users/${id}/child-profile`);
  return response.data;
};
export const verifyUser = async (data: VerifyUser) => {
  const response = await apiClient.post(`/auth/verify`, data);
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
  const response = await apiClient.post("/auth/createUser", userData);
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