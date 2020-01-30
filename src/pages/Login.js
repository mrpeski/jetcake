import * as React from 'react';
import JetCake from '../components';
import Forms from '../forms';

export default function Login(props){
    return (
        <JetCake.Layout>
            <div style={{ backgroundColor: '#ececec', display: 'flex', padding: '20px 0', minHeight: 'calc(100vh - 300px)'}}>
                <Forms.Login />
            </div>
        </JetCake.Layout>
    )
}