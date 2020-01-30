import * as React from 'react';
import JetCake from '../components';
import Service from '../network';
import withToast from '../components/Toast';
import { loginSchema } from './schema';


function Login(props){
    let [state, setState] = React.useState({
        email: '',
        password: '',
    });

    let [isValid, setFormState] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        Service.signIn(state)
                .catch((err) => props.showToast(err.message));
    }
    const handleChange = (e) => {
        let {name, value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const validateField = () => {
        loginSchema.validateAt('email').catch((e) => {
            console.log(e)
        });
    }

    const validateForm = () => {
        loginSchema.isValid(state).then((valid) => {
            setFormState(valid);
            console.log(valid)
        });
    }

    React.useEffect(() => {
        console.group('Boxed')
        console.log(state);
        console.log(isValid);
        console.groupEnd()
    })

    return (
        <form onSubmit={handleSubmit} style={{width: 500, margin: 'auto', backgroundColor: 'white'}}>
            <div style={{top: 0, background: 'rgb(234, 224, 224)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <h3 style={{ fontWeight: 800, color: 'chocolate' }}>Login</h3>
            </div>
            <div style={{ padding: '20px', fontSize: 14 }}>
                <p className={'notice'}>
                    Please fill in your details to log in. 
                    All fields are required.
                </p>
                <JetCake.Label for="email">Email:</JetCake.Label>
                <JetCake.Input type="text" name="email" onChange={handleChange} id="email" value={state['email']} onBlur={validateForm}/>
                <JetCake.Label for="password">Password:</JetCake.Label>
                <JetCake.Input type="password" name="password" onChange={handleChange} id="password" value={state['password']} onBlur={validateForm}/>
                
            </div>
            <div style={{ background: 'rgb(234, 224, 224)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
                <JetCake.Button primary isDisabled={!isValid}>Submit</JetCake.Button>
            </div>
        </form>
    );
}

export default withToast(Login);