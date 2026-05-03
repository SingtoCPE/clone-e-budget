import { api } from "../wrapperApi";

export const useOrganizationsApi = () => {
  const getList = () => api.get("/organizations");
  const getById = (id) => api.get(`/organizations/${id}`);
  const create = (data) => api.post("/organizations", data);
  const edit = (id, data) => api.put(`/organizations/${id}`, data);
  const remove = (id) => api.delete(`/organizations/${id}`);

  return { getList, getById, create, edit, remove };
};
