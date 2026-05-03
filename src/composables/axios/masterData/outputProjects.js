import { api } from "../wrapperApi";

export const useOutputProjectsApi = () => {
  const getList = () => api.get("/output-projects");
  const getById = (id) => api.get(`/output-projects/${id}`);
  const create = (data) => api.post("/output-projects", data);
  const edit = (id, data) => api.put(`/output-projects/${id}`, data);
  const remove = (id) => api.delete(`/output-projects/${id}`);

  return { getList, getById, create, edit, remove };
};
