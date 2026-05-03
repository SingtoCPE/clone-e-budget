import wrapperApi from "./interceptors";

export const api = {
  get: (url, config) => wrapperApi.get(url, config),
  post: (url, data, config) => wrapperApi.post(url, data, config),
  put: (url, data, config) => wrapperApi.put(url, data, config),
  delete: (url, config) => wrapperApi.delete(url, config),
};
