import * as React from 'react';
import JetCake from '../components';
import withToast from '../components/Toast';

export default function Layout(props){
    return (
        <>
            <JetCake.TopNav />
                { props.children }
            <JetCake.Footer />
        </>
    );
}