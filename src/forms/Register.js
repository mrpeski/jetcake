import * as React from 'react';
import JetCake from '../components';
import Service from '../network';
import withToast from '../components/Toast';
import { profileSchema } from './schema';
import { Formik, Form, Field, ErrorMessage } from 'formik';


function Register(props){

    const[state, setState] = React.useState({
        photo: '',
        phonenumber: '',
        email: '',
        password: '',
        dob: '',
        'sec_1': '',
        'sec_2': '',
        'sec_3': '',
    });

    const [tabState, setTabState] = React.useState({
       active: 'profile'
    });

    const handleSubmit = (values) => {
        if(!props.updateKey){
            Service.signUp(values)
                .catch((err) => props.showToast(err.message));
        } else {
            Service.update(values, props.updateKey)
                .catch((err) => props.showToast(err.message));
        }
        
    }


    function handleImage(e) {
        let photo = e.target.files[0];
        setState((prevState) => ({
            ...prevState,
            photo
        }));
    }

    const toggleTab = (e) => {
        let {id: name} = e.target;
        setTabState((prevState) => ({
            active: name
        }))
    }


    return (
        <Formik initialValues={props.entity ? props.entity : state} 
        validationSchema={profileSchema} 
        onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setSubmitting(false)
        }}
      >
    {({isSubmitting}) => 
      <Form style={{width: 500, margin: 'auto', backgroundColor: 'white'}}>
            <div style={{top: 0, background: 'rgb(234, 224, 224)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <h3 style={{ fontWeight: 800, color: 'chocolate' }}>
                    { !props.updateKey ? 'Register' : 'Update Profile'}
                </h3>
                <div>
                <input name="" id="profile" onClick={toggleTab} type='button' value='1. Profile' className={tabState.active === 'profile' ? 'tab active': 'tab'} />
                <input name="" id="security" onClick={toggleTab} type='button' value='2. Security' className={tabState.active === 'security' ? 'tab active': 'tab'}/>
                </div>
            </div>
                <div style={{ padding: '20px', fontSize: 14 }}>
                { !props.updateKey ? <p className={'notice'}>
                        Please fill in your details to register. 
                        All fields are required.
                    </p>  : null }          
                    <div style={{display: tabState.active === 'profile' ? 'block': 'none'}}>
                    <JetCake.Label for="email">Email:</JetCake.Label>
                    <Field type="email" name="email" id="email" disabled={!!props.updateKey}/>
                    <ErrorMessage name="email" component="div" />
                    <JetCake.Label for="password">Password:</JetCake.Label>
                    <Field type="password" name="password" id="password" disabled={!!props.updateKey}/>
                    <ErrorMessage name="password" component="div" />

                    <JetCake.Label for="phonenumber">Phone Number</JetCake.Label>
                    <Field type="text" name="phonenumber" id="phonenumber" />
                    <ErrorMessage name="phonenumber" component="div" />

                    <JetCake.Label for="dob">Date of Birth</JetCake.Label>
                    <Field type="date" name="dob" id="dob" />
                    <ErrorMessage name="dob" component="div" />
                    {
                        !props.updateKey ? 
                        <>
                            <JetCake.Label for="photo">Photo</JetCake.Label>
                            <Field type="file" name="photo" id="photo"  accept="image/*" />
                            <ErrorMessage name="photo" component="div" /> 
                        </> : null
                    }
                    
                    {/* <JetCake.Input type="file" name="photo" id="photo" onChange={handleImage} accept="image/*"  onBlur={validateForm}/> */}
                    </div>
                    <div style={{display: tabState.active === 'security' ? 'block': 'none'}}>
                        <JetCake.Label for="sec_1">What is your favorite color?</JetCake.Label>
                        <Field type="text" name="sec_1" id="sec_1" />
                        <ErrorMessage name="sec_1" component="div" />
                        
                        <JetCake.Label for="sec_2">Which state were you born?</JetCake.Label>
                        <Field type="text" name="sec_2" id="sec_2" />
                        <ErrorMessage name="sec_2" component="div" />

                        <JetCake.Label for="sec_3">When will you stop writing code?</JetCake.Label>
                        <Field type="text" name="sec_3" id="sec_3" />
                        <ErrorMessage name="sec_3" component="div" />
                    </div>
                </div>
            <div style={{ background: 'rgb(234, 224, 224)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
                <JetCake.Button type="submit" primary isDisabled={isSubmitting}>Submit</JetCake.Button>
            </div>
        </Form>
        }
        </Formik>
    );
}

export default withToast(Register);
