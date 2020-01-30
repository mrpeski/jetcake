import * as React from 'react';
import JetCake from '../components';
import Service from '../network';
import withToast from '../components/Toast';
import { profileSchema } from './schema';

function Register(props){

    const[state, setState] = React.useState({
        photo: '',
        phonenumber: '',
        email: '',
        password: '',
        dob: '',
        'sec-1': '',
        'sec-2': '',
        'sec-3': '',
    });

    const [tabState, setTabState] = React.useState({
       active: 'profile'
    });

    let [isValid, setFormState] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        Service.signUp(state)
                .catch((err) => props.showToast(err.message));
    }
    const handleChange = (e) => {
        let {name, value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
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

    React.useEffect(() => {
        console.group('Boxed')
        console.log(state);
        console.groupEnd()
    });

    const validateForm = (e) => {
        const {name, value} = e.target;
        profileSchema.isValid(state).then((valid) => {
            setFormState(valid);
            console.log(valid)
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit} style={{width: 500, margin: 'auto', backgroundColor: 'white'}} encType='multipart/form-data' method='POST'>
            <div style={{top: 0, background: 'rgb(234, 224, 224)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <h3 style={{ fontWeight: 800, color: 'chocolate' }}>Register</h3>
                <div>
                <input name="" id="profile" onClick={toggleTab} type='button' value='1. Profile' className={tabState.active === 'profile' ? 'tab active': 'tab'} />
                <input name="" id="security" onClick={toggleTab} type='button' value='2. Security' className={tabState.active === 'security' ? 'tab active': 'tab'}/>
                </div>
            </div>
                <div style={{ padding: '20px', fontSize: 14 }}>
                    <p className={'notice'}>
                        Please fill in your details to register. 
                        All fields are required.
                    </p>
                    <div style={{display: tabState.active === 'profile' ? 'block': 'none'}}>
                        <JetCake.Label for="email">Email</JetCake.Label>
                        <JetCake.Input type="text" name="email" id="email" onChange={handleChange} value={state["email"]}  onBlur={validateForm}/>
                        <JetCake.Label for="password">Password</JetCake.Label>
                        <JetCake.Input type="password" name="password" id="password" onChange={handleChange} value={state["password"]} onBlur={validateForm}/>
                        <JetCake.Label for="phonenumber">Phone Number</JetCake.Label>
                        <JetCake.Input type="text" name="phonenumber" id="phonenumber" onChange={handleChange} value={state["phonenumber"]}  onBlur={validateForm}/>
                        <JetCake.Label for="dob">Date of Birth</JetCake.Label>
                        <JetCake.Input type="date" name="dob" id="dob" onChange={handleChange} value={state["dob"]} onBlur={validateForm}/>

                        <JetCake.Label for="photo">Photo</JetCake.Label>
                        <JetCake.Input type="file" name="photo" id="photo" onChange={handleImage} accept="image/*"  onBlur={validateForm}/>
                    </div>
                    <div style={{display: tabState.active === 'security' ? 'block': 'none'}}>
                        <JetCake.Label for="sec-1">What?</JetCake.Label>
                        <JetCake.Input type="text" name="sec-1" id="sec-1" onChange={handleChange} value={state["sec-1"]} onBlur={validateForm}/>
                        <JetCake.Label for="sec-2">What?</JetCake.Label>
                        <JetCake.Input type="text" name="sec-2" id="sec-2" onChange={handleChange} value={state["sec-2"]} onBlur={validateForm}/>
                        <JetCake.Label for="sec-3">What?</JetCake.Label>
                        <JetCake.Input type="text" name="sec-3" id="sec-3" onChange={handleChange} value={state["sec-3"]} onBlur={validateForm}/>
                    </div>
                </div>
            <div style={{ background: 'rgb(234, 224, 224)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
                <JetCake.Button primary isDisabled={!isValid}>Submit</JetCake.Button>
            </div>
        </form>
        </>
    );
}

export default withToast(Register);