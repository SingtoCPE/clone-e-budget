import { api } from "../wrapperApi";

export const useActivitiesApi = () => {
  const getList = () => api.get("/activities");
  const getById = (id) => api.get(`/activities/${id}`);
  const create = (data) => api.post("/activities", data);
  const edit = (id, data) => api.put(`/activities/${id}`, data);
  const remove = (id) => api.delete(`/activities/${id}`);

  return { getList, getById, create, edit, remove };
};
