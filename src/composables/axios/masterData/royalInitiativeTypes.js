import { api } from "../wrapperApi";

export const useRoyalInitiativeTypesApi = () => {
  const getList = () => api.get("/royal-initiative-types");
  const getById = (id) => api.get(`/royal-initiative-types/${id}`);
  const create = (data) => api.post("/royal-initiative-types", data);
  const edit = (id, data) => api.put(`/royal-initiative-types/${id}`, data);
  const remove = (id) => api.delete(`/royal-initiative-types/${id}`);

  return { getList, getById, create, edit, remove };
};
