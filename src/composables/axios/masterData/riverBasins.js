import { api } from "../wrapperApi";

export const useRiverBasinsApi = () => {
  const getList = () => api.get("/river-basins");
  const getById = (id) => api.get(`/river-basins/${id}`);
  const create = (data) => api.post("/river-basins", data);
  const edit = (id, data) => api.put(`/river-basins/${id}`, data);
  const remove = (id) => api.delete(`/river-basins/${id}`);

  return { getList, getById, create, edit, remove };
};
