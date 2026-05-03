import { api } from "../wrapperApi";

export const useNationalStrategiesApi = () => {
  const getList = () => api.get("/national-strategies");
  const getById = (id) => api.get(`/national-strategies/${id}`);
  const create = (data) => api.post("/national-strategies", data);
  const edit = (id, data) => api.put(`/national-strategies/${id}`, data);
  const remove = (id) => api.delete(`/national-strategies/${id}`);

  return { getList, getById, create, edit, remove };
};
