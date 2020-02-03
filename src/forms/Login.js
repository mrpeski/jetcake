import * as React from 'react';
import JetCake from '../components';
import Service from '../network';
import withToast from '../components/Toast';
import { loginSchema } from './schema';
import { Formik, Form, Field, ErrorMessage } from 'formik';


function Login(props){

    const handleSubmit = (values) => {
        Service.signIn(values)
                .catch((err) => props.showToast(err.message));
    }

    return (
    <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{width: 500, margin: 'auto', backgroundColor: 'white'}}>
            <div style={{top: 0, background: 'rgb(234, 224, 224)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <h3 style={{ fontWeight: 800, color: 'chocolate' }}>Login</h3>
            </div>
            <div style={{ padding: '20px', fontSize: 14 }}>
                <p className={'notice'}>
                    Please fill in your details to log in. 
                    All fields are required.
                </p>
                <JetCake.Label for="email">Email:</JetCake.Label>
                <Field type="email" name="email" id="email"/>
                <ErrorMessage name="email" component="div" />
                <JetCake.Label for="password">Password:</JetCake.Label>
                <Field type="password" name="password" id="password" />
                <ErrorMessage name="password" component="div" />
            </div>
            <div style={{ background: 'rgb(234, 224, 224)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
                <JetCake.Button type="submit" primary isDisabled={isSubmitting}>Submit</JetCake.Button>
            </div>
          </Form>
        )}
      </Formik>
    );
}

export default withToast(Login);