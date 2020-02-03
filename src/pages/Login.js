import * as React from 'react';
import JetCake from '../components';
import Forms from '../forms';
import { Helmet } from 'react-helmet';


export default function Login(props){
    return (
        <JetCake.Layout>
            <Helmet>
                <title>JetCake Cupcakes | Login</title>
                <link rel="canonical" href="http://localhost:3000/login" />
            </Helmet>
            <div style={{ backgroundColor: '#ececec', display: 'flex', padding: '20px 0', minHeight: 'calc(100vh - 300px)'}}>
                <Forms.Login />
            </div>
        </JetCake.Layout>
    )
}