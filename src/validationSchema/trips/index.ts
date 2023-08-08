import * as yup from 'yup';

export const tripValidationSchema = yup.object().shape({
  name: yup.string().required(),
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
