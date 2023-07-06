import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  time_tracking: yup.number().integer(),
  performance_evaluation: yup.number().integer(),
  user_id: yup.string().nullable(),
});
