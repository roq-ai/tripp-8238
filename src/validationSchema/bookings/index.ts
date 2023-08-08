import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  trip_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
