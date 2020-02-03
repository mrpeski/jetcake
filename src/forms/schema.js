import { string, object } from 'yup'; 
// for only what you need
let profileSchema = object().shape({
    // photo: string().required().nullable(),
    phonenumber: string().required(),
    email: string().email().required(),
    password: string().required(),
    dob: string().required(),
    sec_1: string().required(),
    sec_2: string().required(),
    sec_3: string().required()
  });

const loginSchema = object().shape({
    email: string().email().required(),
    password: string().required()
});

export { profileSchema, loginSchema }