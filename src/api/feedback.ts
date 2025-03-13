import { FeedbackFrom } from "@/lib/users";
import apiClient from "./api";

export const postfeedback = async (data: FeedbackFrom) => {
  const response = await apiClient.post(`/feedback/feedback`, data);
  return response.data;
};
