import { api } from "../wrapperApi";

export const useBudgetCategoriesApi = () => {
  const getList = () => api.get("/budget-categories");
  const getById = (id) => api.get(`/budget-categories/${id}`);
  const create = (data) => api.post("/budget-categories", data);
  const edit = (id, data) => api.put(`/budget-categories/${id}`, data);
  const remove = (id) => api.delete(`/budget-categories/${id}`);

  return { getList, getById, create, edit, remove };
};
