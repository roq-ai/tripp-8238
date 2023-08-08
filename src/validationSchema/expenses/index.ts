import * as yup from 'yup';

export const expenseValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  trip_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
