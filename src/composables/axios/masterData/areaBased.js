import { api } from "../wrapperApi";

export const useAreaBasedApi = () => {
  const getList = () => api.get("/area-based");
  const getById = (id) => api.get(`/area-based/${id}`);
  const create = (data) => api.post("/area-based", data);
  const edit = (id, data) => api.put(`/area-based/${id}`, data);
  const remove = (id) => api.delete(`/area-based/${id}`);

  return { getList, getById, create, edit, remove };
};
