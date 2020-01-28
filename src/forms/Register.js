import * as React from 'react';
import JetCake from '../components';

export default function Register(props){

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

    }
    const handleChange = (e) => {
        setState({
            [e.target.name]: e.target.value
        });
    }

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

