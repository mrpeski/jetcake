import * as React from 'react';
import JetCake from '../components';
import Service from '../network';
import withToast from '../components/Toast';

function Register(props){

    const[state, setState] = React.useState({
        photo: '',
        phonenumber: '',
        email: '',
        dob: '',
        'sec-1': '',
        'sec-2': '',
        'sec-3': '',
    });

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

    React.useEffect(() => {
        console.group('Boxed')
        console.log(state);
        console.groupEnd()
    })

    return (
        <form onSubmit={handleSubmit}>
            <JetCake.Input type="text" name="photo" onChange={handleChange}/>
            <JetCake.Input type="text" name="phonenumber" onChange={handleChange} />
            <JetCake.Input type="text" name="email" onChange={handleChange}/>
            <JetCake.Input type="date" name="dob" onChange={handleChange}/>
            <fieldset>
                <JetCake.Input type="text" name="sec-1" onChange={handleChange}/>
                <JetCake.Input type="text" name="sec-2" onChange={handleChange}/>
                <JetCake.Input type="text" name="sec-3" onChange={handleChange}/>
            </fieldset>
            <JetCake.Button primary>Submit</JetCake.Button>
        </form>
    );
}

export default withToast(Register);