import * as React from 'react';
import JetCake from '../components';
import Forms from '../forms';
import { Helmet } from 'react-helmet';


export default function Register(props){
    return (
        <JetCake.Layout>
            <Helmet>
                <title>JetCake Cupcakes | Register</title>
                <link rel="canonical" href="http://localhost:3000/register" />
            </Helmet>
            <div style={{ backgroundColor: '#ececec', display: 'flex', padding: '20px 0', minHeight: 'calc(100vh - 100px)'}}>
                <Forms.Register />
            </div>
        </JetCake.Layout>
    );
}