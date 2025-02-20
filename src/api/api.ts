import axios, { AxiosError } from "axios";

// Tạo instance của axios với cấu hình cơ bản
const api = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: true,
});

// Thêm interceptor cho request
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token"); // Lấy token từ localStorage (hoặc nơi bạn lưu trữ)
    if (accessToken) {
      if (accessToken !== "null") {
        console.log(JSON.parse(accessToken));
        config.headers = config.headers || {}; // Đảm bảo headers không bị undefined
        config.headers["Authorization"] = `Bearer ${JSON.parse(accessToken)}`;
      }
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Ví dụ: xử lý nếu token hết hạn
      console.error("Unauthorized, redirecting...");
    }
    return Promise.reject(error);
  }
);

export default api;
