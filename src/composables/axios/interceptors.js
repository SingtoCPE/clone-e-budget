// composables/axios/wrapperApi.ts
import { useLoadingStore } from "@/stores/useLoadingStore";
import axios from "axios";
import * as Cookies from "cookie-es";

// loading when call API, stop loading when response or error
export const useApiRequest = () => {
  const loading = ref(false);

  const execute = async (fn) => {
    loading.value = true;
    try {
      const res = await fn();
      return res;
    } finally {
      loading.value = false;
    }
  };

  return { loading, execute };
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
});

api.interceptors.request.use((config) => {
  const loading = useLoadingStore();
  loading.start();

  const token = Cookies.parse(document.cookie).accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => {
    const loading = useLoadingStore();
    loading.stop();
    return res.data;
  },
  (err) => {
    const loading = useLoadingStore();
    loading.stop();
    return Promise.reject(err);
  },
);

export default api;
