import { string, object, date, ValidationError } from 'yup'; 
// for only what you need
let profileSchema = object().shape({
    photo: string().required().nullable(),
    phonenumber: string().required(),
    email: string().email().required(),
    password: string().required(),
    dob: string().required(),
    'sec-1': string().required(),
    'sec-2': string().required(),
    'sec-3': string().required()
  });

const loginSchema = object().shape({
    email: string().email().required(),
    password: string().required()
});

export { profileSchema, loginSchema }