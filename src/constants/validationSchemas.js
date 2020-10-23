import * as yup from 'yup';

const email_field_schema = {
  email: yup.string().email('Dirección de correo inválida').required('Requerido'),
};
const password_field_schema = {
  password: yup
    .string()
    .min(6, 'La contraseña debe tener 6 carácteres o más')
    .required('Requerido'),
};
const repassword_field_schema = {
  repassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Requerido'),
};
const first_name = {
  first_name: yup.string().required('Requerido'),
};
const last_name = {
  last_name: yup.string().required('Requerido'),
};
const phone_1 = {
  phone_1: yup.string().required('Requerido'),
};

const contact_form = {
  firstName: yup.string().required('Required'),
  lastName: yup.string(),
  email: yup.string(),
  contactNumber: yup.string(),
};

export const EMAIL_SCHEMA = yup.object().shape({...email_field_schema});

export const CONTACT_FORM_SCHEMA = yup.object().shape({
  ...contact_form,
});
