import * as React from 'react';
import JetCake from '../components';

export default function Layout(props){
    return (
        <>
            <JetCake.TopNav />
                { props.children }
            <JetCake.Footer />
        </>
    );
}