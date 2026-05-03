import { api } from "../wrapperApi";

export const usePlansApi = () => {
  const getList = () => api.get("/plans");
  const getById = (id) => api.get(`/plans/${id}`);
  const create = (data) => api.post("/plans", data);
  const edit = (id, data) => api.put(`/plans/${id}`, data);
  const remove = (id) => api.delete(`/plans/${id}`);

  return { getList, getById, create, edit, remove };
};
