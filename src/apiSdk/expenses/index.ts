import axios from 'axios';
import queryString from 'query-string';
import { ExpenseInterface, ExpenseGetQueryInterface } from 'interfaces/expense';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getExpenses = async (query?: ExpenseGetQueryInterface): Promise<PaginatedInterface<ExpenseInterface>> => {
  const response = await axios.get('/api/expenses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createExpense = async (expense: ExpenseInterface) => {
  const response = await axios.post('/api/expenses', expense);
  return response.data;
};

export const updateExpenseById = async (id: string, expense: ExpenseInterface) => {
  const response = await axios.put(`/api/expenses/${id}`, expense);
  return response.data;
};

export const getExpenseById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/expenses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteExpenseById = async (id: string) => {
  const response = await axios.delete(`/api/expenses/${id}`);
  return response.data;
};
