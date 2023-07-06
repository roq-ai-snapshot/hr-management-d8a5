import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  feedback: yup.string(),
  user_id: yup.string().nullable(),
});
