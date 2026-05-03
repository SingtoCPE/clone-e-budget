import { api } from "../wrapperApi";

export const useExpenseBudgetDraftApi = () => {
  const getList = () => api.get("/expense-budget-draft");
  const getById = (id) => api.get(`/expense-budget-draft/${id}`);
  const create = (data) => api.post("/expense-budget-draft", data);
  const edit = (id, data) => api.put(`/expense-budget-draft/${id}`, data);
  const remove = (id) => api.delete(`/expense-budget-draft/${id}`);

  return { getList, getById, create, edit, remove };
};
