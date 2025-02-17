import axios, { AxiosError } from "axios";

// Tạo instance của axios với cấu hình cơ bản
const api = axios.create({
  baseURL: "https://gl03.sangtran.dev/",
  // withCredentials: true,
});

// Thêm interceptor cho request
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("user"); // Lấy token từ localStorage (hoặc nơi bạn lưu trữ)
    if (accessToken) {
      console.log(JSON.parse(accessToken));
      if (accessToken && JSON.parse(accessToken)?.access) {
        const Token = JSON.parse(accessToken)?.access?.replace(/"/g, "");
        console.log(Token);
        config.headers = config.headers || {}; // Đảm bảo headers không bị undefined
        config.headers["Authorization"] = `Bearer ${Token}`;
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
