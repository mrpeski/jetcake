import * as React from 'react';
import JetCake from '../components';
import Service from '../network';
import withToast from '../components/Toast';


function Login(props){
    let [state, setState] = React.useState({
        email: '',
        password: '',
    });

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

    React.useEffect(() => {
        console.group('Boxed')
        console.log(state);
        console.groupEnd()
    })

    return (
        <form onSubmit={handleSubmit}>
            <JetCake.Input type="text" name="email" onChange={handleChange}/>
            <JetCake.Input type="password" name="password" onChange={handleChange}/>
            <JetCake.Button primary>Submit</JetCake.Button>
        </form>
    );
}

export default withToast(Login);