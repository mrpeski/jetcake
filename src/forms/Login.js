import * as React from 'react';
import JetCake from '../components';

export default function Login(props){
    const[state, setState] = React.useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {

    }
    const handleChange = (e) => {
        setState({
            [e.target.name]: e.target.value
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <JetCake.Input type="text" name="username" onChange={handleChange}/>
            <JetCake.Input type="password" name="password" onChange={handleChange}/>
            <JetCake.Button primary>Submit</JetCake.Button>
        </form>
    );
}